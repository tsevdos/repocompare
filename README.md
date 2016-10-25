# RepoCompare
[![dependencies Status](https://david-dm.org/tsevdos/repocompare/status.svg)](https://david-dm.org/tsevdos/repocompare)
[![devDependencies Status](https://david-dm.org/tsevdos/repocompare/dev-status.svg)](https://david-dm.org/tsevdos/repocompare?type=dev)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/repocompare/Lobby)

> A React powered single page application that you can easily compare [Github](https://github.com) repositories. You can view the site on [repocompare.io](http://repocompare.io).

## Getting Started

You need to have node.js installed. When you are ready you can install all dependencies, build the app and run development server by typing the below commands :

```
npm install
npm run build   # generates `bundle.js` and `index.html` files, read note below for more information
npm start
open http://localhost:8080
```

*Note: You need to build the `index.html` and `bundle.js` files (on root and dist directory respectively), because webpack-dev-server serves the root directory for development (hence you need an `index.html` file). Keep in mind that after the initial build, you only need to start the server using the last command (`npm start`).*

## License

GPL3 (&#390;) John Tsevdos
