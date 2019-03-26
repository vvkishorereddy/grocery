import React, { Component, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import withSuspense from "../HOC/WithSuspense";

const About = withSuspense(
  lazy(() => import("../StaticComponents/About/index"))
);
const Contact = withSuspense(
  lazy(() => import("../StaticComponents/Contact/index"))
);
const Faq = withSuspense(lazy(() => import("../StaticComponents/Faq/index")));
const Help = withSuspense(lazy(() => import("../StaticComponents/Help/index")));
const Privacy = withSuspense(
  lazy(() => import("../StaticComponents/Privacy/index"))
);
const Terms = withSuspense(
  lazy(() => import("../StaticComponents/Terms/index"))
);
const ErrorPage404 = withSuspense(
  lazy(() => import("../StaticComponents/Error/404"))
);

const Home = withSuspense(lazy(() => import("../components/Home")));

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
