import React from "react";

const VimeoPauseSVG = ({ size = "78" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 45 45"
    >
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="0.903"
          cy="-0.15"
          r="1.519"
          gradientTransform="matrix(-0.484, 0.875, -0.918, -0.508, 1.203, -1.016)"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#2dceef" />
          <stop offset="0.404" stopColor="#2d9bef" />
          <stop offset="1" stopColor="#b942f2" />
          <stop offset="1" stopColor="#9b2def" />
        </radialGradient>
      </defs>
      <g id="Group_40" dataname="Group 40" transform="translate(-0.101 0.483)">
        <circle
          id="Ellipse_17572"
          dataname="Ellipse 17572"
          cx="22.5"
          cy="22.5"
          r="22.5"
          transform="translate(0.101 -0.483)"
          fill="url(#radial-gradient)"
        />
        <rect
          id="Rectangle_3198"
          dataname="Rectangle 3198"
          width="5"
          height="17"
          transform="translate(16.101 13.517)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3199"
          dataname="Rectangle 3199"
          width="5"
          height="17"
          transform="translate(25.101 13.517)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default VimeoPauseSVG;
