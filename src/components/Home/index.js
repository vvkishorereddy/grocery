import React, { Component, Fragment } from "react";
import SpecialOffers from "./SpecialOffers";
import Slider from "./Slider";
import Home from "./Home";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Slider />
        <Home />
        <SpecialOffers />
      </Fragment>
    );
  }
}
