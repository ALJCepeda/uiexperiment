var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'deployment/js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
    mangle: {
        except: ['$super', '$', 'exports', 'require']
    }
  })
  ],
  module: {
    loaders: [{
      test: /\.jpg/,
      loader: 'file'
    }, {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]}, {
      test: /\.scss$/,
      loaders: [
         'style?sourceMap',
         'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
         'resolve-url',
         'sass?sourceMap'
     ]
   },{
        loader:'babel-loader',
                exclude: path.resolve(__dirname, "node_modules"),
                test: /\.js/
    }]
  }
}
