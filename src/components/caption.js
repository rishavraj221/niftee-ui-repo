import React from "react";

import Icon from "../assets/Icons";
import "./homeComponents.css";

const PictureFrames = () => {
  return (
    <div className="pf-container">
      <div className="center-icon">
        <Icon name="voice" color="white" />
      </div>
      <div className="section-head">
        <div className="section-title"></div>
        <Icon name="menu" color="white" />
      </div>
    </div>
  );
};

export default PictureFrames;
