import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

// Set BABEL_ENV to development or production
const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === "build";
process.env.BABEL_ENV = isProduction ? "production" : "development";

// Set up PATHS constants
const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "dist")
};

// Plugins
// Create an HTML page on root
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + "/index.html",
  filename: "../index.html",
  inject: "body"
});

// More optimization on bundle.js in production
const productionPlugin = new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production")
});

const baseConfig = {
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
        test: /\.css$/,
        loader: "style-loader!css-loader",
        include: /flexboxgrid/
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
    extensions: [".js", ".jsx", ".json", ".css"]
  }
};

const developmentConfig = {
  devtool: "cheap-module-inline-source-map",
  devServer: {
    hot: true,
    inline: true,
    port: 8080
  },
  plugins: [HTMLWebpackPluginConfig]
};

const productionConfig = {
  devtool: "cheap-module-source-map",
  plugins: [HTMLWebpackPluginConfig, productionPlugin]
};

export default Object.assign(
  {},
  baseConfig,
  isProduction === true ? productionConfig : developmentConfig
);
