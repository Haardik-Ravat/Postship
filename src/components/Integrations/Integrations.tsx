

import PropTypes from "prop-types";
import React from "react";
import { ButtonShine } from "../ButtonShine";
import "./style.css";

interface Props {
  className: any;
  headingClassName: any;
  text: string;
}

export const Integrations = ({
  className,
  headingClassName,
  text = "Discover a variety of popular integrations tailored for your convenience. <br/><br/>Click to explore and integrate these powerful tools, directing you to our comprehensive Integrations.",
}: Props): JSX.Element => {
  return (
    <div className={`integrations ${className}`}>
      <div className={`heading-3 ${headingClassName}`}>
        <div className="text-wrapper-8">Explore Our Integrated Ecosystem</div>
        <p className="discover-a-variety">{text}</p>
      </div>
      <div className="frame-6">
        <div className="logos">
          <div className="paypal" />
          <div className="ali-reviews" />
          <div className="instagram-feed" />
          <div className="google-analytics" />
          <div className="shopify-flow" />
        </div>
        <div className="div-wrapper">
          <div className="button-2">
            <div className="label-3">Explore Integrations</div>
            <ButtonShine className="button-shine-instance" state="rest" tone="default" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

Integrations.propTypes = {
  text: PropTypes.string,
};
