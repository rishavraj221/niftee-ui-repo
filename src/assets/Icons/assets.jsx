import React, { Component } from "react";

class Assets extends Component {
  render() {
    const { color = "#555555", size = "32" } = this.props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 174 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="5"
          width="130"
          height="130"
          rx="10"
          stroke={color}
          strokeWidth="10"
        />
        <rect
          x="39"
          y="37"
          width="130"
          height="130"
          rx="10"
          fill="white"
          stroke={color}
          strokeWidth="10"
        />
        <ellipse cx="80.5" cy="76" rx="10.5" ry="10" fill={color} />
        <path
          d="M124.128 93.8746C126.033 90.4437 130.967 90.4437 132.872 93.8746L156.853 137.073C158.703 140.406 156.293 144.5 152.481 144.5H104.519C100.707 144.5 98.2969 140.406 100.147 137.073L124.128 93.8746Z"
          fill={color}
        />
        <path
          d="M82.2335 118.314C84.226 116.032 87.774 116.032 89.7665 118.314L105.61 136.462C108.434 139.696 106.137 144.75 101.844 144.75H70.156C65.8628 144.75 63.566 139.696 66.3895 136.462L82.2335 118.314Z"
          fill={color}
        />
      </svg>
    );
  }
}

export default Assets;
