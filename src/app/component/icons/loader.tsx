import React from "react";

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="S" transform="translate(11.000000, 5.000000)">
        <g
          strokeWidth="15"
          fill="none"
          transform="translate(27,19) scale(0.25)"
        >
          <path
            d="M100 50 A50 50 0 1 0 50 100 A50 50 0 1 1 0 150"
            stroke="currentColor"
          />
        </g>
        <g
          strokeWidth="15"
          fill="none"
          transform="translate(27,23) scale(0.25)"
        >
          <path d="M100 50 A50 50 0 1 0 50 100" stroke="currentColor" />
          <path d="M50 100 A50 50 0 1 1 0 150" stroke="currentColor" />
        </g>
      </g>

      <path
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 132.835938 193.101562 L 67.164062 193.101562 L 16.859375 150.898438 L 5.460938 86.226562 L 38.289062 29.351562 L 100 6.898438 L 161.710938 29.351562 L 194.539062 86.226562 L 183.140625 150.898438 Z M 132.835938 193.101562 "
        transform="matrix(0.5,0,0,0.5,0,0)"
      />
    </g>
  </svg>
);

export default IconLoader;
