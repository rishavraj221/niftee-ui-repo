import React from "react";

const AiGraphRenewSVG = ({ size = "623" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={(723 / 623) * size}
      height={size}
      viewBox="0 0 723 623"
    >
      <defs>
        <filter
          id="Ellipse_17571"
          x="72.158"
          y="23.213"
          width="583.94"
          height="583.94"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor="#c3cad9" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Group_41" dataname="Group 41" transform="translate(-970 -80)">
        <g transform="matrix(1, 0, 0, 1, 970, 80)" filter="url(#Ellipse_17571)">
          <circle
            id="Ellipse_17571-2"
            dataname="Ellipse 17571"
            cx="282.97"
            cy="282.97"
            r="282.97"
            transform="translate(81.16 29.21)"
            fill="#fff"
          />
        </g>
        <line
          id="Line_1"
          dataname="Line 1"
          y2="566.293"
          transform="translate(1333.799 109.989)"
          fill="none"
          stroke="#c3cad9"
          strokeWidth="1"
        />
        <line
          id="Line_2"
          dataname="Line 2"
          x1="566"
          transform="translate(1051.5 393.5)"
          fill="none"
          stroke="#c3cad9"
          strokeWidth="1"
        />
        <text
          id="Button"
          transform="translate(1330 95)"
          fill="#6b7a99"
          fontSize="14"
          fontFamily="Roboto-Black, Roboto"
          fontWeight="800"
        >
          <tspan x="-27.945" y="0">
            EXCITED
          </tspan>
        </text>
        <text
          id="Button-2"
          dataname="Button"
          transform="translate(1330 699)"
          fill="#6b7a99"
          fontSize="14"
          fontFamily="Roboto-Black, Roboto"
          fontWeight="800"
        >
          <tspan x="-19.291" y="0">
            CALM
          </tspan>
        </text>
        <text
          id="Button-3"
          dataname="Button"
          transform="translate(1662 399)"
          fill="#6b7a99"
          fontSize="14"
          fontFamily="Roboto-Black, Roboto"
          fontWeight="800"
        >
          <tspan x="-30.95" y="0">
            POSITIVE
          </tspan>
        </text>
        <text
          id="Button-4"
          dataname="Button"
          transform="translate(1004 399)"
          fill="#6b7a99"
          fontSize="14"
          fontFamily="Roboto-Black, Roboto"
          fontWeight="800"
        >
          <tspan x="-33.028" y="0">
            NEGATIVE
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default AiGraphRenewSVG;
