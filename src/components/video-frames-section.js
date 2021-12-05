import React, { useState, useRef, useEffect } from "react";

import useInterval from "../hooks/useInterval";
import captureVideoFrame from "../utils/capture-video-frames";
import { uploadFrame } from "../api/demo";

const VideoFramesSection = ({
  play,
  mockFrames,
  videoRef,
  localVideo,
  videoPlayer,
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

      if (frame.blob.size > 12000) {
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

        try {
          // console.log("processData started");
          await uploadFrame("rishavraj_test", fpsCounter, frame.data);
          // console.log(JSON.stringify(data) + "processData success");
        } catch (ex) {
          console.log(ex);
        }

        setFPScounter(fpsCounter + 1);
      }
    }
  }, 333);

  useInterval(() => {
    if (play) setFramesObjToMap(framesObj);
  }, 1500);

  return (
    <div className="video-frames-section">
      {framesObjToMap && framesObjToMap.length > 0
        ? framesObjToMap.map((frame, index) => (
            <div className="frame-container" key={index}>
              <img src={frame.image} alt="Niftee" className="frame-image"></img>
            </div>
          ))
        : mockFrames.map((frame, index) => (
            <div className="frame-container" key={index}>
              <div className="frame-image"></div>
            </div>
          ))}
      <div ref={frameEndRef} />
    </div>
  );
};

export default VideoFramesSection;

// each frame result front end code
//
// <div className="frame-container" key={index}>
// <div className="frame-heading">{frame.sentimentName}</div>
// <img src={frame.image} alt="Niftee" className="frame-image"></img>
// <div className="frame-result">
//     {"V| " +
//     frame.v.toPrecision(3) +
//     "  A| " +
//     frame.a.toPrecision(3) +
//     "  I| " +
//     frame.i.toPrecision(3)}
// </div>
// </div>
