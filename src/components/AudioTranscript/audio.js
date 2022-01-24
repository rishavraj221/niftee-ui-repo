import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Audio = ({
  sessionId,
  localAudioStream,
  play,
  timeInSeconds,
  videoOrCamera,
  getTranscribeText,
  getTranscribeArr,
}) => {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [pastTranscript, setPastTranscript] = useState("");
  const [transcribeArr, setTranscribeArr] = useState([]);

  useEffect(() => {
    if (play) {
      SpeechRecognition.startListening({ continuous: true });
      console.log("listening started");
    } else {
      SpeechRecognition.stopListening();
      console.log("listening stopped");
    }
  }, [play]);

  useEffect(() => {
    if (timeInSeconds > 0 && timeInSeconds % 5 === 0) {
      const count = timeInSeconds / 5;
      const temp_transcript = transcript;
      setTranscribeArr([
        ...transcribeArr,
        {
          count,
          transcript: temp_transcript.substr(
            pastTranscript.length,
            temp_transcript.length
          ),
        },
      ]);
      setPastTranscript(temp_transcript);
    }
  }, [timeInSeconds]);

  useEffect(() => {
    if (typeof getTranscribeArr === "function") getTranscribeArr(transcribeArr);
  }, [pastTranscript]);

  useEffect(() => {
    if (typeof getTranscribeText === "function") getTranscribeText(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div>{transcript}</div>
    </>
  );
};

export default Audio;
