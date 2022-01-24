import React from "react";

const KeySVG = ({ color = "black", size = "14.625" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(29.25 / 14.625) * size}
      height={size}
      viewBox="0 0 29.25 14.625"
    >
      <path
        id="Icon_ionic-md-key"
        dataname="Icon ionic-md-key"
        d="M17.522,15.75a7.708,7.708,0,0,0-7.045-5.062A7.156,7.156,0,0,0,3.375,18a7.274,7.274,0,0,0,7.242,7.313,7.516,7.516,0,0,0,6.9-5.062H24.75v4.5h4.859v-4.5h3.016v-4.5Zm-6.863,4.676A2.426,2.426,0,1,1,13.085,18,2.431,2.431,0,0,1,10.659,20.426Z"
        transform="translate(-3.375 -10.688)"
      />
    </svg>
  );
};

export default KeySVG;
