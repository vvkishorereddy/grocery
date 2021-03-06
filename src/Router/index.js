import React, { Component, Fragment } from "react";
import Router from "./Router";
import Header from "../Common/Header";
import Nav from "../Common/Nav";
import Footer from "../Common/Footer";
import LoginPopUp from "../components/Login/LoginPopUp";
import RegisterPopUp from "../components/Register/RegisterPopUp";
import Newsletter from "../Common/Newsletter";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Nav />
        <Router />
        <Newsletter />
        <Footer />
        <LoginPopUp />
        <RegisterPopUp />
      </Fragment>
    );
  }
}
