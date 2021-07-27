import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import  Home  from './components/Home'

export default function Routing() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <Redirect to="/home" /> */}
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
