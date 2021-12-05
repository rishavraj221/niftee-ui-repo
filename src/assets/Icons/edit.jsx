import React, { Component } from "react";

class Edit extends Component {
  render() {
    const { color = "#555555", size = "27" } = this.props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 34.4999V41.9999H13.5L35.63 19.8699L28.13 12.3699L6 34.4999V34.4999ZM41.41 14.0899C42.19 13.3099 42.19 12.0399 41.41 11.2599L36.74 6.58988C35.96 5.80988 34.69 5.80988 33.91 6.58988L30.25 10.2499L37.75 17.7499L41.41 14.0899Z"
          fill={color}
        />
      </svg>
    );
  }
}

export default Edit;
