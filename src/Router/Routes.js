import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../containers/Home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route />
    </Switch>
  );
};

export default Routes;
