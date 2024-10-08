/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Spinner5 = ({ color = "#CCCCCC", className }: Props): JSX.Element => {
  return (
    <svg
      className={`spinner-5 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M9.19821 1.96031C9.40005 2.6205 9.02848 3.31931 8.36829 3.52115C7.25033 3.86295 6.2403 4.48923 5.43712 5.33868C4.63394 6.18813 4.06515 7.23161 3.78643 8.36695C3.50772 9.50228 3.52866 10.6905 3.84718 11.8153C4.1657 12.9402 4.77089 13.963 5.60349 14.7836C6.43609 15.6042 7.46755 16.1946 8.59685 16.4968C9.72616 16.799 10.9146 16.8027 12.0458 16.5076C13.177 16.2125 14.2121 15.6286 15.0498 14.8132C15.8876 13.9979 16.4992 12.9789 16.8247 11.8561C17.017 11.193 17.7104 10.8114 18.3734 11.0037C19.0365 11.1959 19.4181 11.8893 19.2258 12.5523C18.7797 14.091 17.9415 15.4874 16.7935 16.6047C15.6455 17.7221 14.227 18.5222 12.6769 18.9266C11.1267 19.331 9.49814 19.3259 7.95058 18.9118C6.40301 18.4977 4.98953 17.6887 3.84857 16.5641C2.7076 15.4395 1.87826 14.0379 1.44176 12.4965C1.00527 10.9551 0.976586 9.32675 1.35852 7.77092C1.74046 6.2151 2.51992 4.78514 3.62058 3.62108C4.72123 2.45702 6.10534 1.59878 7.63736 1.13039C8.29755 0.92855 8.99637 1.30012 9.19821 1.96031Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Spinner5.propTypes = {
  color: PropTypes.string,
};
