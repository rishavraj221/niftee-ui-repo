import React from "react";

const Camera = ({ color = "#c3cad9", size = "27" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1.666667 * size}
      height={size}
      viewBox="0 0 31.5 27"
    >
      <g
        id="Icon_ionic-md-camera"
        dataname="Icon ionic-md-camera"
        transform="translate(-2.25 -4.5)"
      >
        <path
          id="Path_1"
          dataname="Path 1"
          d="M22.43,19.688A4.43,4.43,0,1,1,18,15.258a4.43,4.43,0,0,1,4.43,4.43Z"
          fill={color}
        />
        <path
          id="Path_2"
          dataname="Path 2"
          d="M30.938,6.75H24.75L22.5,4.5h-9L11.25,6.75H5.063A2.812,2.812,0,0,0,2.25,9.563V28.688A2.812,2.812,0,0,0,5.063,31.5H30.938a2.812,2.812,0,0,0,2.813-2.812V9.563A2.812,2.812,0,0,0,30.938,6.75ZM18,27.563a7.875,7.875,0,1,1,7.875-7.875A7.875,7.875,0,0,1,18,27.563Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default Camera;
