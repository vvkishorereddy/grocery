import React, { Component, Fragment } from "react";
import Faq from "./Faq";
import Breadcums from "../../Common/Breadcums";
import Banner from "../Banner";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Breadcums current_page="Faqs" />
        <Faq />
      </Fragment>
    );
  }
}
