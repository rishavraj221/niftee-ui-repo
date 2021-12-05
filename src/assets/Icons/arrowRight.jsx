import React from "react";

const ArrowRight = ({ color = "#c3cad9", size = "15.185" }) => {
  return (
    <svg
      id="Right_Icon"
      dataname="Right Icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={1.0262 * size}
      height={size}
      viewBox="0 0 15.583 15.185"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            id="Icon"
            d="M1,8.592H12.17l-4.88,4.88a1.008,1.008,0,0,0,0,1.42,1,1,0,0,0,1.41,0L15.29,8.3a1,1,0,0,0,0-1.41L8.71.292A1,1,0,0,0,7.3,1.7l4.87,4.89H1a1,1,0,0,0,0,2Z"
            fill={color}
          />
        </clipPath>
      </defs>
      <path
        id="Icon-2"
        dataname="Icon"
        d="M1,8.592H12.17l-4.88,4.88a1.008,1.008,0,0,0,0,1.42,1,1,0,0,0,1.41,0L15.29,8.3a1,1,0,0,0,0-1.41L8.71.292A1,1,0,0,0,7.3,1.7l4.87,4.89H1a1,1,0,0,0,0,2Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRight;
