
import PropTypes from "prop-types";
import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import "./style.css";

interface Props {
  className: any;
  text: string;
  rectangleClassName: any;
  rectangleClassNameOverride: any;
  divClassName: any;
}

export const TrackingPageStyles = ({
  className,
  text = "Value",
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
}: Props): JSX.Element => {
  return (
    <div className={`tracking-page-styles ${className}`}>
      <div className="div-3">
        <div className="heading-wrapper">
          <div className="heading-4">
            <p className="text-wrapper-9">Elevate Your Brand Aesthetics with Custom Tracking Page Styles</p>
            <p className="text-wrapper-10">
              Immerse your customers in a branded experience by personalizing the colors on your tracking page.
            </p>
          </div>
        </div>
        <div className="div-3">
          <div className="div-4">
            <div className="text-field">
              <div className="label-4">
                <div className="label-5">Accent Color</div>
              </div>
              <div className="input">
                <div className="input-text">
                  <div className="value">{text}</div>
                </div>
              </div>
            </div>
            <div className={`rectangle ${rectangleClassName}`} />
          </div>
          <div className="div-4">
            <div className="text-field">
              <div className="label-4">
                <div className="label-5">Text Color</div>
              </div>
              <div className="input">
                <div className="input-text">
                  <div className="value">{text}</div>
                </div>
              </div>
            </div>
            <div className={`rectangle ${rectangleClassNameOverride}`} />
          </div>
          <div className="div-4">
            <div className="text-field">
              <div className="label-4">
                <div className="label-5">Background Color</div>
              </div>
              <div className="input">
                <div className="input-text">
                  <div className="value">{text}</div>
                </div>
              </div>
            </div>
            <div className={`rectangle ${divClassName}`} />
          </div>
        </div>
      </div>
      <ButtonGroup
        buttonShineVariantPrimaryToneClassName="button-group-3"
        className="button-group-2"
        gap="tight"
        text="Apply Colors"
      />
    </div>
  );
};

TrackingPageStyles.propTypes = {
  text: PropTypes.string,
};
