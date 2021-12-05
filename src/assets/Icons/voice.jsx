import React from "react";

const VoiceIcon = ({ color = "black", size = "40" }) => {
  return (
    <svg
      width={2.15 * size}
      height={size}
      viewBox="0 0 86 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2.5"
        y1="8.5"
        x2="2.5"
        y2="31.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="47.5"
        y1="2.5"
        x2="47.5"
        y2="37.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="11.5"
        y1="2.5"
        x2="11.5"
        y2="37.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="56.5"
        y1="8.5"
        x2="56.5"
        y2="31.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="20.5"
        y1="8.5"
        x2="20.5"
        y2="31.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="65.5"
        y1="13.5"
        x2="65.5"
        y2="26.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="29.5"
        y1="13.5"
        x2="29.5"
        y2="26.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="74.5"
        y1="8.5"
        x2="74.5"
        y2="31.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="38.5"
        y1="8.5"
        x2="38.5"
        y2="31.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="83.5"
        y1="2.5"
        x2="83.5"
        y2="37.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default VoiceIcon;