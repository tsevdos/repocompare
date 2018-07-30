const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

// Set up PATHS constants
const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "dist")
};

const config = {
  entry: [PATHS.app],
  output: {
    path: PATHS.build,
    filename: "bundle.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: ["babel-loader"],
        include: PATHS.app
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./app"), "node_modules"],
    extensions: [".js", ".jsx", ".json"]
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    overlay: true
  }
};

// Plugins
// Create an HTML page on root
const htmlPlugin = new HtmlWebPackPlugin({
  template: PATHS.app + "/index.html",
  filename: "../index.html",
  inject: "body"
});

module.exports = (_env, argv) => {
  if (argv.mode === "development") {
    config.mode = "development";
    config.devtool = "cheap-module-inline-source-map";
    config.plugins = [htmlPlugin];
  }

  if (argv.mode === "production") {
    config.mode = "production";
    config.devtool = "cheap-module-source-map";
    config.plugins = [
      htmlPlugin,
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    ];
    config.optimization = {
      minimizer: [new UglifyJsPlugin()]
    };
  }

  return Object.assign({}, config);
};
