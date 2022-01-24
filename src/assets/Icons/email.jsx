import React from "react";

const EmailSVG = ({ color = "black", size = "27" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(34.178 / 27) * size}
      height={size}
      viewBox="0 0 34.178 27"
    >
      <g
        id="Icon_feather-mail"
        dataname="Icon feather-mail"
        transform="translate(-0.911 -4.5)"
      >
        <path
          id="Path_1"
          dataname="Path 1"
          d="M6,6H30a3.009,3.009,0,0,1,3,3V27a3.009,3.009,0,0,1-3,3H6a3.009,3.009,0,0,1-3-3V9A3.009,3.009,0,0,1,6,6Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Path_2"
          dataname="Path 2"
          d="M33,9,18,19.5,3,9"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default EmailSVG;
