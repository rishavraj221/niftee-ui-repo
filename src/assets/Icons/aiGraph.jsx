import React from "react";

const AiGraphSVG = ({ size = "474" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={1.17721518987 * size}
      height={size}
      viewBox="0 0 558 474"
    >
      <defs>
        <filter
          id="Ellipse_17571"
          x="61.25"
          y="16.145"
          width="447"
          height="447"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Group_4"
        dataname="Group 4"
        transform="translate(-795.75 -142.855)"
      >
        <g
          transform="matrix(1, 0, 0, 1, 795.75, 142.86)"
          filter="url(#Ellipse_17571)"
        >
          <circle
            id="Ellipse_17571-2"
            dataname="Ellipse 17571"
            cx="214.5"
            cy="214.5"
            r="214.5"
            transform="translate(70.25 22.14)"
            fill="#edeff2"
          />
        </g>
        <line
          id="Line_1"
          dataname="Line 1"
          y2="429.267"
          transform="translate(1080.25 165.588)"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
        <line
          id="Line_2"
          dataname="Line 2"
          x1="437.5"
          transform="translate(861.5 379.634)"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
      </g>
      <text
        id="Button"
        transform="translate(285 13)"
        fill="#6b7a99"
        fontSize="12"
        fontFamily="Roboto-Black, Roboto"
        fontWeight="800"
      >
        <tspan x="-23.953" y="0">
          EXCITED
        </tspan>
      </text>
      <text
        id="Button-2"
        dataname="Button"
        transform="translate(285 471)"
        fill="#6b7a99"
        fontSize="12"
        fontFamily="Roboto-Black, Roboto"
        fontWeight="800"
      >
        <tspan x="-16.535" y="0">
          CALM
        </tspan>
      </text>
      <text
        id="Button-3"
        dataname="Button"
        transform="translate(531 242)"
        fill="#6b7a99"
        fontSize="12"
        fontFamily="Roboto-Black, Roboto"
        fontWeight="800"
      >
        <tspan x="-26.528" y="0">
          POSITIVE
        </tspan>
      </text>
      <text
        id="Button-4"
        dataname="Button"
        transform="translate(29 242)"
        fill="#6b7a99"
        fontSize="12"
        fontFamily="Roboto-Black, Roboto"
        fontWeight="800"
      >
        <tspan x="-28.31" y="0">
          NEGATIVE
        </tspan>
      </text>
    </svg>
  );
};

export default AiGraphSVG;
