import React from "react";

const Menu = ({ color = "#555555", size = "32" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 13C14.346 13 13 14.346 13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13Z"
        fill={color}
      />
      <path
        d="M6 13C4.346 13 3 14.346 3 16C3 17.654 4.346 19 6 19C7.654 19 9 17.654 9 16C9 14.346 7.654 13 6 13Z"
        fill={color}
      />
      <path
        d="M26 13C24.346 13 23 14.346 23 16C23 17.654 24.346 19 26 19C27.654 19 29 17.654 29 16C29 14.346 27.654 13 26 13Z"
        fill={color}
      />
    </svg>
  );
};

export default Menu;
