

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  headingClassName: any;
  text: string;
  buttonGroupClassName: any;
}

export const Facts = ({
  className,
  headingClassName,
  text = "There are 8 shipments that have been in out for delivery for more than 3 days.<br/><br/>There are 5 shipments in exception right now<br/><br/>There are 5 shipments in exception right now",
  buttonGroupClassName,
}: Props): JSX.Element => {
  return (
    <div className={`facts ${className}`}>
      <div className={`heading-2 ${headingClassName}`}>
        <p className="text-wrapper-7">Star Facts about your orders!!!</p>
        <div className="frame-5">
          <p className="there-are">{text}</p>
          <div className={`button-wrapper ${buttonGroupClassName}`}>
            <button className="label-wrapper">
              <div className="label-2">Check Orders Page</div>
            </button>
          </div>
        </div>
      </div>
      <div className="ellipse" />
      <div className="ellipse-2" />
    </div>
  );
};

Facts.propTypes = {
  text: PropTypes.string,
};
