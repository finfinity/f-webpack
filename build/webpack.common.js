const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const __CONFIG__ = require('../config');

module.exports = {
  entry: {},
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name]/[name].[hash:10].js"
  },
  resolve: {
    extensions: ['.js', '.json', '.scss'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /(\.scss|\.css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
           'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin(''),
    new CleanWebpackPlugin(['dist'], {
      "root": path.resolve(__dirname, '../'),
      "verbose": true,
      "dry": false,
      "exclude": ["files", "to", "ignore"],
      "watch": false
    }),
    new ExtractTextPlugin("[name]/[name].[hash:10].css"),
    new webpack.HotModuleReplacementPlugin()
  ],
};

const arr = process.env.NODE_ENV === 'local' ? __CONFIG__.list : (Array.isArray(__CONFIG__.active) ? __CONFIG__.active : [__CONFIG__.active]);
console.log('__CONFIG__.active ====> ' + arr);
arr.forEach(function (element, index) {
  module.exports.entry[element] = path.resolve(__dirname, '../src/' + element + '/js/index.js');
  module.exports.plugins.push(new HtmlWebpackPlugin({
    filename: element + '/index.html',
    template: path.resolve(__dirname, '../src/' + element + '/index.html'),
    chunks: [element]
  }));
});

/*var cleanDirList = [];
arr.forEach(function (element, index) {
  cleanDirList.push('dist/' + element);
});
module.exports.plugins.push(new CleanWebpackPlugin(cleanDirList, {
  "root": path.resolve(__dirname, '../'),
  "verbose": true,
  "dry": false,
  "exclude": ["files", "to", "ignore"],
  "watch": false
}));*/
