# RepoCompare
> A React powered single page application that you can easily compare [Github](https://github.com) repositories.

## Installation - Run locally

```
npm install
npm run build     # generates `bundle.js` and `index.html` files, read note below for more info
npm start
open http://localhost:8080
```

*Note: You need to build the `index.html` and `bundle.js` files (on root and dist directory respectively), because webpack-dev-server serves the root directory for development (hence you need an `index.html` file).*
