import React, { Component, Fragment } from "react";
import Banner from "../Banner";
import Breadcums from "../../Common/Breadcums";
import Terms from "./Terms";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Breadcums current_page="Terms of Use" />
        <Terms />
      </Fragment>
    );
  }
}
