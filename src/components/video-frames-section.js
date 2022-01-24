import React, { useState, useRef, useEffect } from "react";

import useInterval from "../hooks/useInterval";
import captureVideoFrame from "../utils/capture-video-frames";
import { uploadFrame, getUploadedFramesCount } from "../api/demo";

const VideoFramesSection = ({
  sessionId,
  play,
  mockFrames,
  videoRef,
  localVideo,
  videoPlayer,
  timeInSeconds,
  generatedFrames,
  setGeneratedFrames,
  uploadedFrames,
  setUploadedFrames,
}) => {
  const [framesObj, setFramesObj] = useState([]);
  const [framesObjToMap, setFramesObjToMap] = useState([]);

  const [fpsCounter, setFPScounter] = useState(0);

  const frameEndRef = useRef(null);

  const scrollToRight = () => {
    frameEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(scrollToRight, [framesObjToMap]);

  useInterval(async () => {
    if (play) {
      const frame = captureVideoFrame(
        localVideo ? videoPlayer.getInternalPlayer() : videoRef.current
      );

      if (frame.blob.size > 8000) {
        setFramesObj([
          ...framesObj,
          {
            sentimentName: "Sentiment Name",
            image: frame.rdataUri,
            v: 0.0,
            a: 0.0,
            i: 0.0,
          },
        ]);
        setGeneratedFrames(generatedFrames + 1);

        try {
          setFPScounter(fpsCounter + 1);
          // console.log("processData started");
          await uploadFrame(sessionId, fpsCounter, frame.data);
          console.log("upload frame success");
        } catch (ex) {
          console.log(ex);
        }
      }
    }
  }, 310);

  useInterval(() => {
    if (play) setFramesObjToMap(framesObj);
  }, 1500);

  useInterval(async () => {
    try {
      if (timeInSeconds > 2) {
        const { data } = await getUploadedFramesCount(sessionId);
        if (data) setUploadedFrames(data.count);
      }
    } catch (ex) {
      console.log(ex);
    }
  }, 500);

  return (
    <>
      {/* <div>{generatedFrames}</div> */}
      <div className="video-frames-section">
        {framesObjToMap && framesObjToMap.length > 0
          ? framesObjToMap.map((frame, index) => (
              <div className="frame-container" key={index}>
                <img
                  src={frame.image}
                  alt="Niftee"
                  className="frame-image"
                ></img>
              </div>
            ))
          : mockFrames.map((frame, index) => (
              <div className="frame-container" key={index}>
                <div className="frame-image"></div>
              </div>
            ))}
        <div ref={frameEndRef} />
      </div>
    </>
  );
};

export default VideoFramesSection;
