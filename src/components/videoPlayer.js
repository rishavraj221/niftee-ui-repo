import React, { useState } from "react";

import Icon from "../assets/Icons";
import "./homeComponents.css";

const VideoPlayer = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const [videoMute, setVideoMute] = useState(true);

  const handlePlay = async () => {
    setCameraOn(true);
    const videoStream = await window.navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    // const audioStream = await window.navigator.mediaDevices.getUserMedia({
    //   video: false,
    //   audio: true,
    // });
    const video = document.getElementById("video");
    video.srcObject = videoStream;
    video.play();
  };

  return (
    <div className="video-container">
      {!cameraOn ? (
        <div className="center-icon" onClick={handlePlay}>
          <Icon name="play" />
        </div>
      ) : (
        <video
          id="video"
          className="video-player"
          controls
          autoplay
          muted={videoMute}
        >
          <div className="section-head">
            <div className="section-title">Video Player</div>
            <div onClick={() => setVideoMute(!videoMute)}>
              {videoMute ? "Unmute" : "Mute"}
            </div>
            <Icon name="menu" color="white" />
          </div>
        </video>
      )}
      <div className="section-head">
        <div className="section-title">Video Player</div>
        <div onClick={() => setVideoMute(!videoMute)}>
          {videoMute ? "Unmute" : "Mute"}
        </div>
        <Icon name="menu" color="white" />
      </div>
    </div>
  );
};

export default VideoPlayer;
