/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Checkcircle1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`checkcircle-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.2803 9.03033C13.5732 8.73744 13.5732 8.26256 13.2803 7.96967C12.9874 7.67678 12.5126 7.67678 12.2197 7.96967L9.25 10.9393L8.03033 9.71967C7.73744 9.42678 7.26256 9.42678 6.96967 9.71967C6.67678 10.0126 6.67678 10.4874 6.96967 10.7803L8.71967 12.5303C9.01256 12.8232 9.48744 12.8232 9.78033 12.5303L13.2803 9.03033Z"
        fill="#4A4A4A"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10Z"
        fill="#4A4A4A"
        fillRule="evenodd"
      />
    </svg>
  );
};
