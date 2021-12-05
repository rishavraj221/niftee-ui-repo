import React from "react";

const CameraOn = ({ color = "#8f8f8f", size = "15" }) => {
  return (
    <svg
      width={1.8 * size}
      height={size}
      viewBox="0 0 27 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="19" height="15" rx="2" fill={color} />
      <path
        d="M16.5 8.36602C15.8333 7.98112 15.8333 7.01887 16.5 6.63397L24.75 1.87083C25.4167 1.48593 26.25 1.96706 26.25 2.73686V12.2631C26.25 13.0329 25.4167 13.5141 24.75 13.1292L16.5 8.36602Z"
        fill={color}
      />
    </svg>
  );
};

export default CameraOn;
