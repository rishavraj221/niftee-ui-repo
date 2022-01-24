import React, { useState, useEffect } from "react";
import crypto from "crypto"; // tot sign our pre-signed URL
import { EventStreamMarshaller } from "@aws-sdk/eventstream-marshaller"; // for converting binary event stream messages to and from JSON
import { toUtf8, fromUtf8 } from "@aws-sdk/util-utf8-node"; // utilities for encoding and decoding UTF8
import mic from "microphone-stream"; // collect microphone input as a stream of raw bytes

import v4 from "./aws-signature-v4"; // to generate our pre-signed URL
import { downsampleBuffer, pcmEncode } from "./audioUtils"; // for encoding audio data as PCM

import { uploadText } from "../../api/demo";

import useInterval from "../../hooks/useInterval";

// our converter between binary event streams messages and JSON
const eventStreamMarshaller = new EventStreamMarshaller(toUtf8, fromUtf8);

let text = "";
let textTS = "";

const Audio = ({
  sessionId,
  localAudioStream,
  play,
  videoOrCamera,
  getTranscribeText,
  languageCode = "en-US",
  region = "us-east-1",
  sampleRate = 44100,
  timeout = 60000,
}) => {
  const [inputSampleRate, setInputSampleRate] = useState(44100);

  const [webSocket, setWebSocket] = useState();

  const [transcription, setTranscription] = useState("");
  const [textToSend, setTextToSend] = useState("");
  const [sendCounter, setSendCounter] = useState(0);

  // const captionEndDiv = useRef(null);

  // const scrollToEnd = () => {
  //   captionEndDiv.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "start",
  //   });
  // };

  // useEffect(scrollToEnd, [transcription]);

  const handleEventStreamMessage = (messageJson) => {
    const results = messageJson.Transcript.Results;

    // console.log(results.length > 0 && results[0]);

    if (results.length > 0) {
      if (results[0].Alternatives.length > 0) {
        let transcript = results[0].Alternatives[0].Transcript;

        transcript = decodeURIComponent(escape(transcript));

        if (!results[0].IsPartial) {
          text += " " + transcript;
          textTS += transcript;
        }
      }
    }
  };

  const convertAudioToBinaryMessage = (audioChunk) => {
    const raw = mic.toRaw(audioChunk);

    if (raw === null) return;

    const downsampledBuffer = downsampleBuffer(
      raw,
      inputSampleRate,
      sampleRate
    );

    const pcmEndodedBuffer = pcmEncode(downsampledBuffer);

    const audioEventMessage = getAudioEventMessage(
      Buffer.from(pcmEndodedBuffer)
    );

    const binary = eventStreamMarshaller.marshall(audioEventMessage);

    return binary;
  };

  const getAudioEventMessage = (buffer) => {
    return {
      headers: {
        ":message-type": {
          type: "string",
          value: "event",
        },
        ":event-type": {
          type: "string",
          value: "AudioEvent",
        },
      },
      body: buffer,
    };
  };

  const createPresignedUrl = () => {
    let endpoint = "transcribestreaming." + region + ".amazonaws.com:8443";

    // get a preauthenticated URL that we can use to establish our WebSocket
    return v4.createPresignedURL(
      "GET",
      endpoint,
      "/stream-transcription-websocket",
      "transcribe",
      crypto.createHash("sha256").update("", "utf8").digest("hex"),
      {
        key: "AKIAQH2FOQJL4LIMUVBE",
        secret: "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",
        sessionToken: "",
        protocol: "wss",
        expires: 300,
        region: region,
        query:
          "language-code=" +
          languageCode +
          "&media-encoding=pcm&sample-rate=" +
          sampleRate,
      }
    );
  };

  const stop = (socket) => {
    if (socket) {
      socket.close();
      setWebSocket(undefined);
      console.log("Amazon Transcribing stopped");
    }
  };

  const streamAudioToWebSocket = async (userMediaStream) => {
    const micStream = new mic();

    micStream.on("format", (data) => {
      setInputSampleRate(data.sampleRate);
    });

    micStream.setStream(userMediaStream);

    const url = createPresignedUrl();

    // open up our WebSocket connection
    const socket = new WebSocket(url);
    socket.binaryType = "arraybuffer";

    socket.onopen = () => {
      micStream.on("data", (rawAudioChunk) => {
        // the audio stream is raw audio bytes. Transcribe expects PCM with additional metadata, encoded as binary
        const binary = convertAudioToBinaryMessage(rawAudioChunk);
        if (socket.readyState === socket.OPEN) {
          socket.send(binary);
        }
      });
    };

    socket.onmessage = (message) => {
      const messageWrapper = eventStreamMarshaller.unmarshall(
        Buffer.from(message.data)
      );
      const messageBody = JSON.parse(
        String.fromCharCode.apply(String, messageWrapper.body)
      );
      if (messageWrapper.headers[":message-type"].value === "event") {
        handleEventStreamMessage(messageBody);
      } else {
        console.error(messageBody.Message);
        stop(socket);
      }
    };

    socket.onerror = () => {
      stop(socket);
    };

    socket.onclose = () => {
      micStream.stop();
    };

    setWebSocket(socket);

    setTimeout(() => {
      stop(socket);
    }, timeout);

    console.log("Amazon Transcribing started");
  };

  const start = () => {
    // first we get the microphone input from the browser (as a promise)...
    if (videoOrCamera === "camera")
      window.navigator.mediaDevices
        .getUserMedia({
          video: false,
          audio: true,
        })
        .then(streamAudioToWebSocket)
        .catch(() => {
          alert("Please check your microphone is working and try again...");
        });
    else if (localAudioStream) streamAudioToWebSocket(localAudioStream);
    else return;
  };

  useInterval(async () => {
    setTranscription(text);
    setTextToSend(textTS);
  }, 500);

  // useInterval(async () => {
  //   try {
  //     if (textToSend) {
  //       const { data } = await uploadText(sessionId, sendCounter, textToSend);
  //       console.log(JSON.stringify(data) + "getTranscribeTextScore success");
  //       textTS = "";
  //       setSendCounter(sendCounter + 1);
  //       console.log(textToSend);
  //     }
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // }, 5000);

  useEffect(() => {
    if (play && !webSocket) start();
    else stop(webSocket);
  }, [play]);

  useEffect(() => {
    if (typeof getTranscribeText === "function")
      getTranscribeText(transcription);
  }, [transcription, getTranscribeText]);

  return (
    <>
      <div>{transcription}</div>
    </>
  );
};

export default Audio;
