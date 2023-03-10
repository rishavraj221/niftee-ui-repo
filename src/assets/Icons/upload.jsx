import React from "react";

const UploadSVG = ({ color = "#c3cad9", size = "22.183" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22.186 22.183"
    >
      <path
        id="Icon_awesome-upload"
        data-name="Icon awesome-upload"
        d="M12.826,16.642H9.36A1.037,1.037,0,0,1,8.32,15.6V8.322H4.52a.865.865,0,0,1-.611-1.478L10.5.249a.84.84,0,0,1,1.183,0l6.6,6.6a.865.865,0,0,1-.611,1.478h-3.8V15.6A1.037,1.037,0,0,1,12.826,16.642Zm9.36-.347v4.853a1.037,1.037,0,0,1-1.04,1.04H1.04A1.037,1.037,0,0,1,0,21.148V16.3a1.037,1.037,0,0,1,1.04-1.04H6.933V15.6A2.428,2.428,0,0,0,9.36,18.028h3.467A2.428,2.428,0,0,0,15.253,15.6v-.347h5.893A1.037,1.037,0,0,1,22.186,16.3Zm-5.373,3.813a.867.867,0,1,0-.867.867A.869.869,0,0,0,16.813,20.108Zm2.773,0a.867.867,0,1,0-.867.867A.869.869,0,0,0,19.586,20.108Z"
        transform="translate(0 -0.005)"
        fill={color}
      />
    </svg>
  );
};

export default UploadSVG;
