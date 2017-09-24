import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import AppContainer from "containers/AppContainer";
import { Main, About } from "components";

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={AppContainer} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

export default routes;
