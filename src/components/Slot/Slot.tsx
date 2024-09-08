
import React from "react";
import "./style.css";

interface Props {
  className: any;
  backgroundClassName: any;
}

export const Slot = ({ className, backgroundClassName }: Props): JSX.Element => {
  return (
    <div className={`slot ${className}`}>
      <div className="text-wrapper-14">Slot</div>
      <div className={`background ${backgroundClassName}`} />
    </div>
  );
};
