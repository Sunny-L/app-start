'use strict'
var path = require('path');
var webpack = require('webpack')

var js_file = 'main'

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client', // WebpackDevServer host and port
    `./public/js/react/${js_file}.js`
  ],
  output: {
    path:path.join(__dirname, '/public/build'),
    publicPath:'http://127.0.0.1:5000/public/build',
    filename: `${js_file}.min.js`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot','babel?presets[]=react,presets[]=es2015']
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot','babel?presets[]=react,presets[]=es2015']
    },{
      test: /\.css$/,
      loader: 'style!css!autoprefixer-loader'
    }]
   }
}
