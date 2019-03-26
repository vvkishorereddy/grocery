import React, { Component, Fragment } from "react";
import Video from "./Video";
import Content from "./Content";
import Breadcums from "../../Common/Breadcums";
import Banner from "../Banner";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Breadcums current_page="About Us" />
        <Content />
        <Video />
      </Fragment>
    );
  }
}
