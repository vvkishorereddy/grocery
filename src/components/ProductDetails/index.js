import React, { Component, Fragment } from "react";
import Banner from "../../StaticComponents/Banner";
import Breadcums from "../../Common/Breadcums";
import SpecialOffers from "../SpecialOffer/SpecialOffers";
import Details from "./Details";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Breadcums current_page="Single Page" />
        <Details />
        <SpecialOffers />
      </Fragment>
    );
  }
}
