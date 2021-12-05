import React, { Component } from "react";

class Collection extends Component {
  render() {
    const { color = "#555555", size = "32" } = this.props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 106 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2.5"
          y="2.5"
          width="45"
          height="45"
          rx="9.5"
          stroke={color}
          strokeWidth="8"
        />
        <rect
          x="58.5"
          y="2.5"
          width="45"
          height="45"
          rx="9.5"
          stroke={color}
          strokeWidth="8"
        />
        <rect
          x="58.5"
          y="57.5"
          width="45"
          height="45"
          rx="9.5"
          stroke={color}
          strokeWidth="8"
        />
        <rect
          x="2.5"
          y="57.5"
          width="45"
          height="45"
          rx="9.5"
          stroke={color}
          strokeWidth="8"
        />
      </svg>
    );
  }
}

export default Collection;
