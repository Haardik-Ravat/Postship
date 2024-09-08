

import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import "./style.css";

interface Props {
  className: any;
}

export const Html = ({ className }: Props): JSX.Element => {
  return (
    <div className={`HTML ${className}`}>
      <div className="heading-5">
        <div className="heading-6">
          <p className="text-wrapper-11">Seamlessly Integrate Custom HTML Elements</p>
          <p className="text-wrapper-12">
            Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate
            the tracking page experience for your customers.
          </p>
        </div>
      </div>
      <div className="multiline-field">
        <div className="label-6">
          <div className="label-7">HTML Link</div>
        </div>
        <div className="input-text-wrapper">
          <div className="input-text-2">
            <div className="text-wrapper-13">Value</div>
          </div>
        </div>
      </div>
      <ButtonGroup
        buttonShineVariantPrimaryToneClassName="button-group-6"
        className="button-group-4"
        divClassName="button-group-5"
        gap="tight"
        text="Apply changes"
      />
    </div>
  );
};
