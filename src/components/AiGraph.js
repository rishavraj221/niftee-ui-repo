import React from "react";

import Icon from "../assets/Icons";

const AIGraphComponent = ({
  face = [{ x: 0, y: 0, sentimentName: "Pleased" }],
  audio = [{ x: 0, y: 0, sentimentName: "Miserable" }],
}) => {
  const scale = 173;

  // origin shift for big plot
  const bigXShift = 213;
  const bigYShift = 179;

  // origin shift for small plot
  const smallXShift = 226;
  const smallYShift = 192;

  if (face.length === 0 || audio.length === 0)
    return (
      <div className="ai-graph">
        <Icon name="aigraph" size="380" />
      </div>
    );

  const {
    x: bigFaceX,
    y: bigFaceY,
    sentimentName: faceSentiment,
  } = face[face.length - 1];
  const {
    x: bigAudioX,
    y: bigAudioY,
    sentimentName: audioSentiment,
  } = audio[audio.length - 1];

  return (
    <div className="ai-graph">
      <Icon name="aigraph" size="380" />
      <div
        className="plot"
        style={{
          left: bigXShift + bigFaceX * scale,
          bottom: bigYShift + bigFaceY * scale,
        }}
      >
        <div className="plot-icon">
          <Icon name="face" color="white" />
        </div>
        <div className="plot-sentiment-text">
          {faceSentiment.substring(0, 13)}
        </div>
      </div>
      <div
        className="plot"
        style={{
          left: bigXShift + bigAudioX * scale,
          bottom: bigYShift + bigAudioY * scale,
        }}
      >
        <div className="plot-icon">
          <Icon name="mic" color="white" />
        </div>
        <div className="plot-sentiment-text">
          {audioSentiment.substring(0, 13)}
        </div>
      </div>
      {face.length > 1 &&
        face.slice(0, face.length - 1).map((f, index) => (
          <div
            key={index}
            className="face-dot"
            style={{
              left: smallXShift + f.x * scale,
              bottom: smallYShift + f.y * scale,
            }}
          />
        ))}
      {audio.length > 1 &&
        audio.slice(0, audio.length - 1).map((a, index) => (
          <div
            key={index}
            className="audio-dot"
            style={{
              left: smallXShift + a.x * scale,
              bottom: smallYShift + a.y * scale,
            }}
          />
        ))}
    </div>
  );
};

export default AIGraphComponent;
