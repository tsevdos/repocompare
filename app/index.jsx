import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import repoStore from './stores/RepoStore';
import Repo from './stores/Repo';
import AppContainer from './containers/AppContainer';
import '../scss/app.scss';

window.repoStore = repoStore; // TODO: Just for debugging. Remove it when done
const bootstrap = new Repo({username: 'twbs', reponame: 'bootstrap'});
window.repoStore.addRepo(bootstrap);

ReactDOM.render(<AppContainer repoStore={repoStore} />, document.getElementById('app'));
