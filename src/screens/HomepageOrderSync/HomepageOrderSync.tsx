import React from "react";
import { ButtonShine } from "../../components/ButtonShine";
import { Card } from "../../components/Card";
import { Facts } from "../../components/Facts";
import { Html } from "../../components/Html";
import { Integrations } from "../../components/Integrations";
import { TpViews } from "../../components/TpViews";
import { TrackingLink } from "../../components/TrackingLink";
import { TrackingPageStyles } from "../../components/TrackingPageStyles";
import { Alerttriangle1 } from "../../icons/Alerttriangle1";
import { Calendar1 } from "../../icons/Calendar1";
import { Chevrondown1 } from "../../icons/Chevrondown1";
import { Info } from "../../icons/Info";
import { Person } from "../../icons/Person";
import { Search1 } from "../../icons/Search1";
import { Settings } from "../../icons/Settings";
import "./style.css";

export const HomepageOrderSync = (): JSX.Element => {
  return (
    <div className="homepage-order-sync">
      <div className="div-5">
        <div className="overlap">
          <img
            className="bg-illustration"
            alt="Bg illustration"
            src="https://c.animaapp.com/FkeLEGIt/img/bg-illustration.svg"
          />
          <div className="text-wrapper-15">Welcome, John Mathew!!</div>
          <div className="tracking-link-wrapper">
            <TrackingLink
              buttonGroupButtonShineVariantPrimaryToneClassName="tracking-link-2"
              buttonGroupText="Go To Navigation Menu"
              className="tracking-link-instance"
              icon={<Info className="icon-instance-node" />}
            />
          </div>
          <div className="order-quota-wrapper">
            <div className="order-quota">
              <div className="heading-7">
                <div className="frame-7">
                  <Alerttriangle1 className="icon-instance-node" />
                  <div className="order-quota-pending">Customize Customer Notification</div>
                </div>
                <div className="div-wrapper-2">
                  <p className="your-order-quota-is">
                    Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers
                  </p>
                </div>
              </div>
              <div className="button-group-7">
                <div className="button-3">
                  <div className="label-8">Configure Notifications</div>
                  <ButtonShine className="button-shine-2" state="rest" tone="default" variant="primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-2">
            <div className="order-quota">
              <div className="heading-7">
                <div className="frame-7">
                  <div className="order-quota-pending-2">Order Sync Successful!</div>
                </div>
                <div className="div-wrapper-2">
                  <p className="your-order-quota-is-2">
                    Your order details from the last 30 days have been successfully synced. Check them out now!
                  </p>
                </div>
              </div>
              <div className="button-group-7">
                <div className="button-3">
                  <div className="label-8">Explore Your Orders</div>
                  <ButtonShine className="button-shine-3" state="rest" tone="default" variant="primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="performance-metrics">
            <div className="overlap-group">
              <p className="text-wrapper-16">Instant Dive into Your Performance Metrics</p>
              <div className="card-header-wrapper">
                <div className="card-header">
                  <div className="frame-8">
                    <div className="text-wrapper-17">Lifetime</div>
                  </div>
                  <div className="frame-9">
                    <div className="text-wrapper-17">Last Week</div>
                  </div>
                  <div className="frame-9">
                    <div className="text-wrapper-17">Last Month</div>
                  </div>
                  <div className="frame-9">
                    <div className="text-wrapper-17">Last Year</div>
                  </div>
                  <div className="frame-10">
                    <div className="text-wrapper-17">Customize Time Line</div>
                    <Calendar1 className="icon-instance-node" color="#4A4A4A" />
                  </div>
                </div>
              </div>
              <div className="card-wrapper">
                <div className="shipment-wrapper">
                  <div className="shipment">
                    <div className="div-6">
                      <div className="div-wrapper-2">
                        <div className="frame-11">
                          <div className="text-wrapper-18">Shipment Updates</div>
                          <div className="text-wrapper-19">Total Orders : 394</div>
                        </div>
                      </div>
                      <div className="frame-12">
                        <div className="card-header-2">
                          <div className="frame-13">
                            <div className="text-wrapper-17">Delivered</div>
                          </div>
                          <div className="frame-14">
                            <div className="text-wrapper-17">Out for delivery</div>
                          </div>
                          <div className="frame-14">
                            <div className="text-wrapper-17">Intransit</div>
                          </div>
                          <div className="frame-14">
                            <div className="text-wrapper-17">Pending</div>
                          </div>
                          <div className="frame-14">
                            <div className="text-wrapper-17">Exception</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <div className="overlap-2">
                        <img className="img" alt="Group" src="https://c.animaapp.com/FkeLEGIt/img/group@2x.png" />
                        <img className="group-2" alt="Group" src="https://c.animaapp.com/FkeLEGIt/img/group-1@2x.png" />
                        <div className="overlap-group-wrapper">
                          <div className="element-wrapper">
                            <div className="element">40</div>
                          </div>
                        </div>
                        <img className="group-3" alt="Group" src="https://c.animaapp.com/FkeLEGIt/img/group-2@2x.png" />
                        <img className="group-4" alt="Group" src="https://c.animaapp.com/FkeLEGIt/img/group-3@2x.png" />
                      </div>
                    </div>
                    <div className="div-6">
                      <div className="frame-15">
                        <div className="frame-16">
                          <img
                            className="rectangle-2"
                            alt="Rectangle"
                            src="https://c.animaapp.com/FkeLEGIt/img/rectangle-34-5.svg"
                          />
                          <div className="text-wrapper-19">Exception</div>
                        </div>
                        <div className="frame-16">
                          <img
                            className="rectangle-2"
                            alt="Rectangle"
                            src="https://c.animaapp.com/FkeLEGIt/img/rectangle-34-6.svg"
                          />
                          <div className="text-wrapper-19">Intransit</div>
                        </div>
                        <div className="frame-16">
                          <img
                            className="rectangle-2"
                            alt="Rectangle"
                            src="https://c.animaapp.com/FkeLEGIt/img/rectangle-34-7.svg"
                          />
                          <div className="text-wrapper-19">Pending</div>
                        </div>
                      </div>
                      <div className="frame-17">
                        <div className="frame-16">
                          <img
                            className="rectangle-2"
                            alt="Rectangle"
                            src="https://c.animaapp.com/FkeLEGIt/img/rectangle-34-8.svg"
                          />
                          <div className="text-wrapper-19">Delivered</div>
                        </div>
                        <div className="frame-16">
                          <img
                            className="rectangle-2"
                            alt="Rectangle"
                            src="https://c.animaapp.com/FkeLEGIt/img/rectangle-34-9.svg"
                          />
                          <div className="text-wrapper-19">Out for delivery</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="card-instance" override={<TpViews className="TP-views-instance" />} />
              <div className="facts-wrapper">
                <Facts
                  buttonGroupClassName="facts-3"
                  className="facts-instance"
                  headingClassName="facts-2"
                  text={
                    <>
                      There are 8 shipments that have been in out for delivery for more than 3 days.
                      <br />
                      <br />
                      There are 5 shipments in exception right now
                      <br />
                      <br />
                      The maximum chargebacks are from Miami.
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="functionality">
          <div className="one-one-wrapper">
            <div className="one-one">
              <div className="frame-18">
                <div className="heading-8">
                  <p className="text-wrapper-20">Exclusive Onboarding Support for High-Volume Brands</p>
                  <p className="unlock-personalized">
                    Unlock personalized guidance! Book a one-on-one <br />
                    onboarding call to streamline your experience.
                  </p>
                </div>
              </div>
              <div className="button-group-7">
                <div className="button-3">
                  <div className="label-9">Schedule A Call</div>
                  <ButtonShine className="button-shine-4" state="rest" tone="default" variant="primary" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-wrapper-21">Discover the Heart of Our Functionality</p>
          <div className="integrations-wrapper">
            <Integrations
              className="design-component-instance-node-2"
              headingClassName="integrations-instance"
              text="Discover a variety of popular integrations tailored for your convenience."
            />
          </div>
          <div className="tracking-page-styles-wrapper">
            <TrackingPageStyles
              className="design-component-instance-node-2"
              divClassName="tracking-page-styles-3"
              rectangleClassName="tracking-page-styles-instance"
              rectangleClassNameOverride="tracking-page-styles-2"
              text="FFEAEA"
            />
          </div>
          <div className="HTML-wrapper">
            <Html className="design-component-instance-node-2" />
          </div>
        </div>
        <div className="top-nav">
          <div className="navigation-contents">
            <div className="div-7">
              <div className="text">
                <div className="text-wrapper-18">Home</div>
              </div>
              <img className="line" alt="Line" src="https://c.animaapp.com/FkeLEGIt/img/line-1.svg" />
            </div>
            <div className="div-7">
              <div className="text">
                <div className="text-wrapper-18">Orders</div>
              </div>
            </div>
            <div className="div-7">
              <div className="text">
                <div className="text-wrapper-18">Integrations</div>
              </div>
            </div>
            <div className="div-7">
              <div className="text">
                <div className="text-wrapper-18">Tracking Page</div>
                <Chevrondown1 className="icon-instance-node" />
              </div>
            </div>
            <div className="div-7">
              <div className="text">
                <div className="text-wrapper-18">Partner with Us</div>
              </div>
            </div>
          </div>
          <div className="frame-19">
            <div className="div-7">
              <div className="text-2">
                <Search1 className="icon-instance-node" color="#4A4A4A" />
                <div className="text-wrapper-22">Search</div>
              </div>
              <img className="line-2" alt="Line" src="https://c.animaapp.com/FkeLEGIt/img/line-1-1.svg" />
            </div>
            <div className="orders">
              <div className="text">
                <Person className="icon-instance-node" />
                <div className="text-wrapper-23">Account</div>
              </div>
            </div>
            <div className="orders">
              <div className="text">
                <Settings className="icon-instance-node" />
                <div className="text-wrapper-23">Settings</div>
              </div>
            </div>
          </div>
          <img className="line-3" alt="Line" src="https://c.animaapp.com/FkeLEGIt/img/line-2.svg" />
        </div>
      </div>
    </div>
  );
};
