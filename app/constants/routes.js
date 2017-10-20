import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AppContainer from "containers/AppContainer";
import { Main, About } from "components";

const routes = (
  <HashRouter>
    <div>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/about" component={About} />
    </div>
  </HashRouter>
);

export default routes;
