import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

// Set BABEL_ENV to development or production
const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = LAUNCH_COMMAND === 'build'
process.env.BABEL_ENV = isProduction ? 'production' : 'development'

// Set up PATHS constants
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
}

// Plugins
// Create an HTML page on root
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: '../index.html',
  inject: 'body'
})

// More optimization on bundle.js in production
const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const baseConfig = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        include: PATHS.app,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        include: PATHS.app,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      }
    ]
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js', '.jsx', '.json', '.css'],
    modulesDirectories: ['node_modules']
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    port: 8080,
    historyApiFallback: true
  },
  plugins: [HTMLWebpackPluginConfig]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin]
}

export default Object.assign({}, baseConfig, isProduction === true ? productionConfig : developmentConfig)
