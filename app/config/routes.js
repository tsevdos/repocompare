import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { MainContainer, AboutContainer } from 'containers';
import { App } from 'components';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={App} />
      <Route path="about" component={AboutContainer} />
    </Route>
  </Router>
);

export default routes;
