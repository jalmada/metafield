var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/theme/main.less',
    './src/main/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  devServer: {
    contentBase: "./src"
  },
  devtool: 'source-map',
  exclude: [path.resolve(__dirname, "node_modules")],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015",'stage-0'],
        },
      },
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
      {    test: /\.html$/,
             loader: 'raw!html-minifier'
        }
    ]
  },
  'html-minifier-loader': {
    removeComments: false,
    collapseWhitespace: true,
    conservativeCollapse: true,
    preserveLineBreaks: true
},
  debug: true
};
