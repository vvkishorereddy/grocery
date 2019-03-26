import React, { Component, Fragment } from "react";
import Banner from "../../StaticComponents/Banner";
import SpecialOffers from "../SpecialOffer/SpecialOffers";
import Content from "./Content";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Content />
        <SpecialOffers />
      </Fragment>
    );
  }
}
