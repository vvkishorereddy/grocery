import React, { Component, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import withSuspense from "./HOC/WithSuspense";

const About = withSuspense(lazy(() => import("./StaticComponents/About")));
const Contact = withSuspense(lazy(() => import("./StaticComponents/Contact")));
const Faq = withSuspense(lazy(() => import("./StaticComponents/Faq")));
const Help = withSuspense(lazy(() => import("./StaticComponents/Help")));
const Privacy = withSuspense(lazy(() => import("./StaticComponents/Privacy")));
const Terms = withSuspense(lazy(() => import("./StaticComponents/Terms")));
const ErrorPage404 = withSuspense(lazy(() => import("./StaticComponents/404")));

const Home = withSuspense(lazy(() => import("./components/Home")));

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/faqs" exact component={Faq} />
        <Route path="/help" exact component={Help} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/terms" exact component={Terms} />
        <Route render={ErrorPage404} />
      </Switch>
    );
  }
}
