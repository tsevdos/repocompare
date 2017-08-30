import { applyMiddleware, createStore, compose } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import rootReducer from './reducers';

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware()
  )
);

export default store;
