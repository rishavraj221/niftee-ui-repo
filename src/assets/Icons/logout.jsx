import React from "react";

const LogoutSVG = ({ color = "black", size = "36" }) => {
  return (
    <svg
      width={(41 / 36) * size}
      height={size}
      viewBox="0 0 41 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6035 12.1847C23.0439 12.1847 23.4666 12.0097 23.7783 11.6983C24.0897 11.3865 24.2651 10.9639 24.2651 10.523V4.98454C24.2651 3.66253 23.7397 2.3949 22.8047 1.45999C21.8702 0.525059 20.6022 0 19.2802 0H4.98494C3.66292 0 2.3949 0.525029 1.46038 1.45999C0.525454 2.39491 0 3.66253 0 4.98454V31.0155C0 32.3375 0.525414 33.6051 1.46038 34.54C2.39492 35.4749 3.66292 36 4.98494 36H19.2742C20.5963 36 21.8639 35.475 22.7988 34.54C23.7337 33.6051 24.2588 32.3375 24.2588 31.0155V26.0306C24.2588 25.4372 23.942 24.8886 23.4282 24.5919C22.914 24.2948 22.2807 24.2948 21.7665 24.5919C21.2523 24.8886 20.9359 25.4372 20.9359 26.0306V31.0155C20.9359 31.4559 20.7605 31.8785 20.4491 32.1903C20.1374 32.5017 19.7147 32.6767 19.2743 32.6767H4.98497C4.54416 32.6767 4.12151 32.5017 3.81012 32.1903C3.49835 31.8785 3.32333 31.4559 3.32333 31.0155V4.98454C3.32333 4.54413 3.49834 4.12147 3.81012 3.80969C4.1215 3.49831 4.54415 3.32329 4.98497 3.32329H19.2743C19.7147 3.32329 20.1374 3.4983 20.4491 3.80969C20.7605 4.12146 20.9359 4.54412 20.9359 4.98454V10.523C20.9359 10.965 21.1117 11.3884 21.4242 11.7002C21.7372 12.0119 22.1614 12.1862 22.603 12.1846L22.6035 12.1847Z"
        fill={color}
      />
      <path
        d="M10.6946 18.277C10.6946 18.7174 10.8696 19.1401 11.1814 19.4519C11.4931 19.7632 11.9154 19.9386 12.3562 19.9386H35.1807L29.0218 26.0312V26.0308C28.6231 26.4519 28.4729 27.0507 28.6255 27.6102C28.7781 28.1696 29.2115 28.6093 29.769 28.7696C30.3261 28.9303 30.9268 28.7885 31.3537 28.396L40.3869 19.4624C40.703 19.1503 40.8811 18.7241 40.8811 18.2798C40.8811 17.8356 40.703 17.4094 40.3869 17.0973L31.3537 8.17486C30.9268 7.78234 30.326 7.64056 29.769 7.80089C29.2115 7.96161 28.778 8.40087 28.6255 8.96032C28.4729 9.52012 28.6231 10.1186 29.0218 10.5397L35.1807 16.6322H12.3562C11.9185 16.6322 11.4982 16.8049 11.1872 17.1128C10.8762 17.4211 10.6993 17.8395 10.6946 18.2772L10.6946 18.277Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoutSVG;