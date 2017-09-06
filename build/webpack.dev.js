const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: [
      path.join(__dirname, '../static'),
      path.join(__dirname, '../dist')
    ],
    port: 12345,
    host: "localhost",
    proxy: {
      /*'/api': {
        target: 'https://other-server.example.com',
        pathRewrite: {
          '^/api': ''
        }
      }*/
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev'),
      }
    })
  ]
});
