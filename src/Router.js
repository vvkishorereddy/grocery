import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import withSuspense from "./HOC/WithSuspense";

const About = withSuspense(lazy(() => import("./StaticPages/About")));

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact render={() => <h1>Contact</h1>} />
        <Route path="/faqs" exact render={() => <h1>Faq</h1>} />
        <Route path="/help" exact render={() => <h1>Help</h1>} />
        <Route path="/privacy" exact render={() => <h1>Privacy</h1>} />
        <Route path="/terms" exact render={() => <h1>Terms</h1>} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    );
  }
}
