import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Main, App, About } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={App} />
      <Route path="about" component={About} />
    </Route>
  </Router>
)

export default routes
