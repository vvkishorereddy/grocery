import React, { Component, lazy } from "react";
import withSuspense from "../../HOC/WithSuspense";
import LeftSection from "../LeftSection";

const RightSection = withSuspense(lazy(() => import("./RightSection")));

export default class Home extends Component {
  render() {
    return (
      <div className="ads-grid">
        <div className="container">
          <h3 className="tittle-w3l">
            Our Top Products
            <span className="heading-style">
              <i />
              <i />
              <i />
            </span>
          </h3>
          <LeftSection />
          <RightSection />
        </div>
      </div>
    );
  }
}
