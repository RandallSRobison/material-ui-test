import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/News";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={News} />
    </Switch>
  </Router>
);
