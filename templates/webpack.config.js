var path = require('path');
var webpack = require('webpack');


var js_file = 'main';

module.exports = {
  entry: [
    `./public/js/react/${js_file}.js`
  ],
  output: {
    path: path.join(__dirname, './public/build'),
    publicPath:'/public/build/',
    filename: js_file+'.min.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015']
      },{
        test: /\.css$/,
        loader: 'style!css!autoprefixer-loader'
      }]
  }
}
