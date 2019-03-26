import React, { Component, Fragment } from "react";
import Footer from "../../Common/Footer";
import Newsletter from "../../Common/Newsletter";
import SpecialOffers from "./SpecialOffers";
import Slider from "./Slider";
import LoginPopUp from "./LoginPopUp";
import RegisterPopUp from "./RegisterPopUp";
import Nav from "../../Common/Nav";
import Header from "../../Common/Header";
import Products from "./Products";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Nav />
        <Slider />
        <Products />
        <SpecialOffers />
        <Newsletter />
        <Footer />
        <LoginPopUp />
        <RegisterPopUp />
      </Fragment>
    );
  }
}
