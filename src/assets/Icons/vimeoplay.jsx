import React from "react";

const VimeoPlay = ({ size = "78" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 78 78"
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
      <g id="Group_17" dataname="Group 17" transform="translate(-914 -22)">
        <circle
          id="Ellipse_17572"
          dataname="Ellipse 17572"
          cx="39"
          cy="39"
          r="39"
          transform="translate(914 22)"
          fill="url(#radial-gradient)"
        />
        <path
          id="Polygon_1"
          dataname="Polygon 1"
          d="M16.947,0,33.894,31.775H0Z"
          transform="translate(975.887 43) rotate(90)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default VimeoPlay;
