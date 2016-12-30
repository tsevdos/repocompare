import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import repoStore from 'stores/RepoStore';
import Repo from 'stores/Repo';
import routers from './config/routes';

const bootstrap = new Repo({ username: 'twbs', reponame: 'bootstrap' });
repoStore.addRepo(bootstrap);

ReactDOM.render(
  <Provider repoStore={repoStore}>
    {routers}
  </Provider>,
  document.getElementById('app')
);
