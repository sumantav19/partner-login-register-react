var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "app"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // anything with file ext .js will get loaded through babel-loader
        exclude: /(node_modules|bower_components)/, // With exception of node modules  and bower components
        loader: 'babel-loader', // will transpile the ES6 and ES7 to ES5
        query: {
          presets: ['react', 'es2015', 'stage-0'], // it is gonna transpile react , es2015 code
          // Transform-class-properties because we are gonna use class properties of es6
          // transpile react-html-attrs to es5
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'], 
        }
      }
    ]
  },
  output: {
    path: __dirname + "/app/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};