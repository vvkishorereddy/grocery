import React, { Component, Fragment } from "react";
import Banner from "../Banner";
import Breadcums from "../../Common/Breadcums";
import Map from "./Map";
import Contact from "./Contact";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Breadcums current_page="Contact Us" />
        <Contact />
        <Map />
      </Fragment>
    );
  }
}
