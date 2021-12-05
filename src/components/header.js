import React, { useState, useRef } from "react";

import Icon from "../assets/Icons";
import "./header.css";

const Header = ({
  onClickArrow,
  onClickCamera,
  getLocalVideoURL,
  videoOrCamera,
}) => {
  const inputFile = useRef(null); // for local video file

  const [videoURLval, setVideoURLval] = useState("");

  return (
    <header className="header-container">
      <div className="header-content-left">
        <div className="video-url-container">
          <div className="video-url-content-left">
            <Icon name="vimeo" />
            <input
              value={videoURLval}
              onChange={(event) => setVideoURLval(event.target.value)}
              className="video-url-input"
              placeholder="Any video url"
            />
          </div>
          <div
            className="input-arrow"
            onClick={() => onClickArrow(videoURLval)}
          >
            <Icon name="arrowright" />
          </div>
        </div>
        <div className="camera-icon" onClick={onClickCamera}>
          <Icon name="camera" />
        </div>
        <input
          ref={inputFile}
          type="file"
          onChange={(event) => {
            if (typeof getLocalVideoURL === "function")
              getLocalVideoURL(URL.createObjectURL(event.target.files[0]));
          }}
          style={{ display: "none" }}
        />
        <div
          onClick={() => {
            if (videoOrCamera)
              return alert(
                "It seems you are already in a session, if you want to start a new session please refresh the window..."
              );
            inputFile.current.click();
          }}
          className="vimeo-video-play-icon"
        >
          <Icon name="vimeoplay" size="55" />
        </div>
      </div>
      <div className="header-content-right">
        <div className="header-settings-container">
          <Icon name="settings" />
          <div className="settings-text text-dark">Settings</div>
        </div>
        <div className="header-profile">
          <Icon name="profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
