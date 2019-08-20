import React from "react";
import { Switch, Route } from "react-router-dom";
import News from "./components/News";
import Rooms from "./components/Rooms";

export default (
  <Switch>
    <Route exact path="/" component={News} />
    <Route exact path="/rooms" component={Rooms} />
  </Switch>
);