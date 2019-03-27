import React, { Component } from "react";
import ImageSlider from "./ImageSlider";
import Content from "./Content";

export default class Details extends Component {
  render() {
    return (
      <div className="banner-bootom-w3-agileits">
        <div className="container">
          <h3 className="tittle-w3l">
            Single Page
            <span className="heading-style">
              <i />
              <i />
              <i />
            </span>
          </h3>
          <ImageSlider />
          <Content />
          <div className="clearfix"> </div>
        </div>
      </div>
    );
  }
}
