import React, { Component } from "react";

class Cross extends Component {
  render() {
    const { color = "#555555", size = "27" } = this.props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 27 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3.82843"
          width="32"
          height="4"
          rx="1"
          transform="rotate(45 3.82843 0)"
          fill={color}
        />
        <rect
          y="22.6274"
          width="32"
          height="4"
          rx="1"
          transform="rotate(-45 0 22.6274)"
          fill={color}
        />
      </svg>
    );
  }
}

export default Cross;
