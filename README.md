# RepoCompare

[![dependencies Status](https://david-dm.org/tsevdos/repocompare/status.svg)](https://david-dm.org/tsevdos/repocompare)
[![devDependencies Status](https://david-dm.org/tsevdos/repocompare/dev-status.svg)](https://david-dm.org/tsevdos/repocompare?type=dev)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/repocompare/Lobby)

> A React powered single page application that you can easily compare [Github](https://github.com) repositories. You can view the site on [repocompare.io](http://repocompare.io).

## Technologies

App is live and well at [repocompare.io](http://repocompare.io/)

* [React](https://facebook.github.io/react/) for building and rendering components
* [Firebase](https://firebase.google.com/) (Firebase Authentication) for handling [Github OAuth](https://developer.github.com/apps/building-oauth-apps/authorization-options-for-oauth-apps/)
* [Apollo Client](https://www.apollographql.com/client/) for consuming [Github's GraphQL API](https://developer.github.com/v4/)
* [Material-UI](https://www.material-ui.com/) for UI components and elements
* [React Router](https://github.com/ReactTraining/react-router) for routing
* [Babel.js](https://babeljs.io/) for using ES6 features, compiling JSX, etc.
* [Webpack](https://webpack.github.io/) for building and bundling
* Tested with [Jest](https://facebook.github.io/jest/)

## Run locally

You need to have node.js installed. When you are ready you can install all dependencies and run the development server by typing the below commands:

```
npm install
npm start
open http://localhost:8080
```

## License

MIT [John Tsevdos](http://tsevdos.me)
