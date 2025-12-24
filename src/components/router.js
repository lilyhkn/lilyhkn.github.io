import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Coding from "../pages/coding";
import Art from "../pages/art";

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/coding" component={Coding} />
    <Route path="/art" component={Art} />
  </Switch>
);
