import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, AppContainer, AboutContainer } from 'containers'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={AppContainer} />
      <Route path="about" component={AboutContainer} />
    </Route>
  </Router>
)

export default routes
