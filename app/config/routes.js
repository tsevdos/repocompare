import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { AppContainer } from 'containers'
import { Main, About } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={AppContainer} />
      <Route path="about" component={About} />
    </Route>
  </Router>
)

export default routes
