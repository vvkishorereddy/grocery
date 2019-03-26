import React, { Component, Fragment } from "react";
import Banner from "../Banner";
import Breadcums from "../../Common/Breadcums";
import Privacy from "./Privacy";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Breadcums current_page="Privacy Policy" />
        <Privacy />
      </Fragment>
    );
  }
}
