import React, { Component, Fragment } from "react";
import "./App.css";
import Router from "./Router/index";
import { animateScroll as scroll } from "react-scroll";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router />
        <a onClick={() => scroll.scrollToTop()}>
          <img
            src="images/move-up.png"
            alt=""
            style={{
              right: "20px",
              marginRight: "30px",
              marginBottom: "20px",
              position: "absolute"
            }}
          />
        </a>
      </Fragment>
    );
  }
}

export default App;
