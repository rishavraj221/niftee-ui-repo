import React from "react";

const PlayIcon = ({ color = "#f63", size = "240" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="240"
      height="240"
      viewBox="0 0 240 240"
    >
      <defs>
        <filter
          id="Base"
          x="0"
          y="0"
          width="240"
          height="240"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="30" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="30" result="blur" />
          <feFlood floodColor={color} floodOpacity="0.502" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <clipPath id="clip-path">
          <path
            id="Icon"
            d="M0,1v10.36a1,1,0,0,0,1.54.84l8.14-5.18a1,1,0,0,0,0-1.69L1.54.161A1,1,0,0,0,0,1Z"
            transform="translate(0 0)"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g id="Play" transform="translate(90 60)">
        <g transform="matrix(1, 0, 0, 1, -90, -60)" filter="url(#Base)">
          <rect
            id="Base-2"
            dataname="Base"
            width="60"
            height="60"
            rx="30"
            transform="translate(90 60)"
            fill={color}
          />
        </g>
        <g id="Icon-2" dataname="Icon" transform="translate(24.517 24)">
          <path
            id="Icon-3"
            dataname="Icon"
            d="M0,1v10.36a1,1,0,0,0,1.54.84l8.14-5.18a1,1,0,0,0,0-1.69L1.54.161A1,1,0,0,0,0,1Z"
            transform="translate(0 0)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
};

export default PlayIcon;
