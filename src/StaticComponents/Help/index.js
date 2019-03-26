import React, { Component, Fragment } from "react";
import Banner from "../Banner";
import Breadcums from "../../Common/Breadcums";
import Help from "./Help";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Breadcums current_page="Help" />
        <Help />
      </Fragment>
    );
  }
}
