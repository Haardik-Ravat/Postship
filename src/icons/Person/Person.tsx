/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Person = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`person ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3ZM8 6.5C8 5.39543 8.89543 4.5 10 4.5C11.1046 4.5 12 5.39543 12 6.5C12 7.60457 11.1046 8.5 10 8.5C8.89543 8.5 8 7.60457 8 6.5Z"
        fill="#4A4A4A"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M15.4839 14.2268C14.3775 12.2352 12.2783 11 9.99999 11C7.72169 11 5.62247 12.2352 4.51603 14.2268L4.07937 15.0128C3.58406 15.9043 4.22875 17 5.24867 17H14.7513C15.7712 17 16.4159 15.9043 15.9206 15.0128L15.4839 14.2268ZM5.82727 14.9552C6.66915 13.4398 8.26644 12.5 9.99999 12.5C11.7335 12.5 13.3308 13.4398 14.1727 14.9552L14.4754 15.5H5.52463L5.82727 14.9552Z"
        fill="#4A4A4A"
        fillRule="evenodd"
      />
    </svg>
  );
};
