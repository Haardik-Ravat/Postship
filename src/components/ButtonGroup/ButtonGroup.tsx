

import PropTypes from "prop-types";
import React from "react";
import { ButtonShine } from "../ButtonShine";
import "./style.css";

interface Props {
  gap: "extra-tight" | "loose" | "tight";
  className: any;
  text: string;
  divClassName: any;
  buttonShineVariantPrimaryToneClassName: any;
}

export const ButtonGroup = ({
  gap,
  className,
  text = "Label",
  divClassName,
  buttonShineVariantPrimaryToneClassName,
}: Props): JSX.Element => {
  return (
    <div className={`button-group ${gap} ${className}`}>
      <button className="button">
        <div className="label">{text}</div>
      </button>
      <div className="div">
        <div className={`text-wrapper ${divClassName}`}>{text}</div>
        <ButtonShine className={buttonShineVariantPrimaryToneClassName} state="rest" tone="default" variant="primary" />
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  gap: PropTypes.oneOf(["extra-tight", "loose", "tight"]),
  text: PropTypes.string,
};
