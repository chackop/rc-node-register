import React from "react";
import { Switch, Route } from "react-router-dom";
import DataView from "./DataView";
import Login from "./Login";
import Register from "./Register";

const Routes = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/data">
        <DataView />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
