/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Xcircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`xcircle ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.0303 6.96967C13.3232 7.26256 13.3232 7.73744 13.0303 8.03033L11.0607 10L13.0303 11.9697C13.3232 12.2626 13.3232 12.7374 13.0303 13.0303C12.7374 13.3232 12.2626 13.3232 11.9697 13.0303L10 11.0607L8.03033 13.0303C7.73744 13.3232 7.26256 13.3232 6.96967 13.0303C6.67678 12.7374 6.67678 12.2626 6.96967 11.9697L8.93934 10L6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967C7.26256 6.67678 7.73744 6.67678 8.03033 6.96967L10 8.93934L11.9697 6.96967C12.2626 6.67678 12.7374 6.67678 13.0303 6.96967Z"
        fill="#4A4A4A"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5Z"
        fill="#4A4A4A"
        fillRule="evenodd"
      />
    </svg>
  );
};
