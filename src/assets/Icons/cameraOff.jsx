import React from "react";

const CameraOff = ({ color = "#8f8f8f", size = "26" }) => {
  return (
    <svg
      width={1.423 * size}
      height={size}
      viewBox="0 0 37 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="7" width="19" height="15" rx="2" fill={color} />
      <path
        d="M21.5 15.366C20.8333 14.9811 20.8333 14.0189 21.5 13.634L29.75 8.87083C30.4167 8.48593 31.25 8.96706 31.25 9.73686V19.2631C31.25 20.0329 30.4167 20.5141 29.75 20.1292L21.5 15.366Z"
        fill={color}
      />
      <line
        x1="4.08623"
        y1="1.61577"
        x2="34.7376"
        y2="22.7328"
        stroke="#F9F9F9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="2.77437"
        y1="4.44969"
        x2="30.5715"
        y2="23.0447"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CameraOff;
