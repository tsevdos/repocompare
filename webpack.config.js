var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'eval',
  entry: './app/index.jsx',
  output: {
    path: path.join(__dirname, './'),
    filename: 'bundle.js',
    publicPath: "http://localhost:8080"
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        include: path.join(__dirname, 'app'),
        loader: "babel"
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, 'app'),
        loader: "json"
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss'],
    modulesDirectories: ['node_modules']
  },
  plugins: [HTMLWebpackPluginConfig]
}
