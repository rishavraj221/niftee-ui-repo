import React, { useState, useEffect, useRef } from "react";

import { getCaption } from "../../api/demo";

const Audio = ({
  sessionId,
  timeInSeconds,
  play,
  getTranscribeText,
  getTranscribeArr,
}) => {
  const [transcript, setTranscript] = useState("");
  const [count, setCount] = useState(1);
  const [transcribe_arr, setTranscribe_arr] = useState([]);

  const func = async () => {
    const { data } = await getCaption(sessionId, count);
    if (data === "no_data") return;
    setTranscript(transcript + " " + data.transcription);
    setTranscribe_arr([
      ...transcribe_arr,
      {
        count,
        transcript: data.transcription,
      },
    ]);
    setCount(count + 1);
  };

  useEffect(() => {
    if (timeInSeconds > 0 && timeInSeconds % 5 === 0) {
      try {
        func();
      } catch (ex) {
        console.log(ex);
      }
    }
  }, [timeInSeconds]);

  useEffect(() => {
    if (typeof getTranscribeText === "function") getTranscribeText(transcript);
  }, [transcript]);

  useEffect(() => {
    if (typeof getTranscribeArr === "function")
      getTranscribeArr(transcribe_arr);
  }, [transcribe_arr]);

  const transcriptEndRef = useRef(null);

  const scrollToRight = () => {
    transcriptEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(scrollToRight, [transcript]);

  return (
    <>
      <div>{transcript}</div>
      <div ref={transcriptEndRef} />
    </>
  );
};

export default Audio;
