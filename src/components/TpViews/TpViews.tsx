
import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const TpViews = ({ className }: Props): JSX.Element => {
  return (
    <div className={`TP-views ${className}`}>
      <div className="div-2">
        <p className="text-wrapper-3">Tracking Page Views Vs Orders</p>
        <p className="text-wrapper-4">
          Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.
        </p>
      </div>
      <div className="frame-2">
        <div className="div-2">
          <div className="frame-wrapper">
            <div className="frame-3">
              <div className="text-wrapper-5">Orders</div>
              <div className="text-wrapper-6">80</div>
              <img className="order" alt="Order" src="https://c.animaapp.com/FkeLEGIt/img/order-1.svg" />
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="frame-4">
            <div className="text-wrapper-5">Tracking Page Views</div>
            <div className="text-wrapper-6">44</div>
            <img className="view" alt="View" src="https://c.animaapp.com/FkeLEGIt/img/view-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
