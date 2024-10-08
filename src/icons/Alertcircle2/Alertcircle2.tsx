/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Alertcircle2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`alertcircle-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 6C10.4142 6.00001 10.75 6.3358 10.75 6.75001L10.7499 10.25C10.7499 10.6642 10.4141 11 9.99993 11C9.58572 11 9.24994 10.6642 9.24994 10.25L9.25 6.74999C9.25001 6.33577 9.5858 5.99999 10 6Z"
        fill="#8E1F0B"
      />
      <path
        className="path"
        d="M11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13Z"
        fill="#8E1F0B"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10Z"
        fill="#8E1F0B"
        fillRule="evenodd"
      />
    </svg>
  );
};
