import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import AppState from './stores/AppState';
import AppContainer from './containers/AppContainer';
import '../scss/app.scss';

const appState = new AppState();
window.appState = appState; // TODO: Just for debugging. Remove it when done

ReactDOM.render(<AppContainer appState={appState} />, document.getElementById('app'));
