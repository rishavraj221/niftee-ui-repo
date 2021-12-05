import React from "react";

const ImagesIcon = ({ color = "white", size = "81" }) => {
  return (
    <svg
      width={1.407 * size}
      height={size}
      viewBox="0 0 114 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_22_1329)">
        <rect
          x="23.2473"
          y="10"
          width="67.5052"
          height="61"
          rx="15"
          fill={color}
        />
        <ellipse
          cx="44.0629"
          cy="26.0833"
          rx="5.06289"
          ry="5.08333"
          fill="#2C2A8F"
        />
        <path
          d="M61.7792 35.646C63.7433 32.5533 68.2567 32.5533 70.2207 35.646L80.1748 51.3195C82.2888 54.6483 79.8974 59 75.954 59H56.046C52.1026 59 49.7111 54.6483 51.8252 51.3195L61.7792 35.646Z"
          fill="#2C2A8F"
        />
        <path
          d="M43.6817 42.5166C45.679 40.154 49.321 40.154 51.3183 42.5166L58.2975 50.7719C61.0451 54.022 58.7349 59 54.4791 59H40.5209C36.2651 59 33.9549 54.022 36.7025 50.772L43.6817 42.5166Z"
          fill="#2C2A8F"
        />
        <path
          d="M95 18C99.9706 18 104 22.0294 104 27V54C104 58.9706 99.9706 63 95 63V18Z"
          fill={color}
        />
        <path
          d="M10 27C10 22.0294 14.0294 18 19 18V63C14.0294 63 10 58.9706 10 54V27Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_22_1329"
          x="0"
          y="0"
          width="114"
          height="81"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_22_1329"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_22_1329"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ImagesIcon;
