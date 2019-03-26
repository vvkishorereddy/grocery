import React, { Component, Fragment } from "react";
import Breadcums from "../../Common/Breadcums";
import LeftSection from "../LeftSection";
import Products from "./Products";

export default class Content extends Component {
  render() {
    return (
      <Fragment>
        <Breadcums current_page="Kitchen Products" />
        <div className="ads-grid">
          <div className="container">
            {/* tittle heading */}
            <h3 className="tittle-w3l">
              Kitchen Products
              <span className="heading-style">
                <i />
                <i />
                <i />
              </span>
            </h3>
            {/* //tittle heading */}
            <LeftSection />
            <Products />
          </div>
        </div>
      </Fragment>
    );
  }
}
