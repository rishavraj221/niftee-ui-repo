import React from "react";

const Profile = ({ size = "65" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 65 65"
    >
      <defs>
        <filter
          id="Base"
          x="0"
          y="0"
          width="65"
          height="65"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="2" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feFlood floodColor="#26334d" floodOpacity="0.031" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <clipPath id="clip-path">
          <path
            id="Icon"
            d="M15,16H1a1,1,0,0,1-1-1V14c0-.82.52-2,3-3a14.848,14.848,0,0,1,5-1,14.848,14.848,0,0,1,5,1c2.478.993,3,2.178,3,3v1A1,1,0,0,1,15,16ZM8,8a4,4,0,1,1,4-4A4.005,4.005,0,0,1,8,8Z"
            fill="#c3cad9"
          />
        </clipPath>
      </defs>
      <g id="User" transform="translate(7.5 5.5)">
        <g transform="matrix(1, 0, 0, 1, -7.5, -5.5)" filter="url(#Base)">
          <rect
            id="Base-2"
            dataname="Base"
            width="50"
            height="50"
            rx="25"
            transform="translate(7.5 5.5)"
            fill="#fff"
          />
        </g>
        <g id="Icon-2" dataname="Icon" transform="translate(17 17)">
          <path
            id="Icon-3"
            dataname="Icon"
            d="M15,16H1a1,1,0,0,1-1-1V14c0-.82.52-2,3-3a14.848,14.848,0,0,1,5-1,14.848,14.848,0,0,1,5,1c2.478.993,3,2.178,3,3v1A1,1,0,0,1,15,16ZM8,8a4,4,0,1,1,4-4A4.005,4.005,0,0,1,8,8Z"
            fill="#c3cad9"
          />
        </g>
      </g>
    </svg>
  );
};

export default Profile;
