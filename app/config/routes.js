import React from 'react';
import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import repoStore from 'stores/RepoStore';
import Repo from 'stores/Repo';
import { MainContainer, AppContainer, AboutContainer } from 'containers';

const bootstrap = new Repo({ username: 'twbs', reponame: 'bootstrap' });
repoStore.addRepo(bootstrap);

const routes = (
  <Provider repoStore={repoStore}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={AppContainer} />
        <Route path="about" component={AboutContainer} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
