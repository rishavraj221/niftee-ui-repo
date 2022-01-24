import React from "react";

const VideoSVG = ({ size = "20.721", color = "#c3cad9" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(31.082 / 20.721) * size}
      height={size}
      viewBox="0 0 31.082 20.721"
    >
      <path
        id="Icon_awesome-video"
        data-name="Icon awesome-video"
        d="M18.142,4.5H2.579A2.579,2.579,0,0,0,0,7.079V22.642a2.579,2.579,0,0,0,2.579,2.579H18.142a2.579,2.579,0,0,0,2.579-2.579V7.079A2.579,2.579,0,0,0,18.142,4.5Zm10.22,2.034-5.914,4.08v8.494l5.914,4.074a1.73,1.73,0,0,0,2.72-1.392V7.927A1.731,1.731,0,0,0,28.362,6.534Z"
        transform="translate(0 -4.5)"
        fill={color}
      />
    </svg>
  );
};

export default VideoSVG;
