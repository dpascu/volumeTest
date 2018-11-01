const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(path.join(__dirname, 'dist')),
    new UglifyJsPlugin(),
    new MinifyPlugin({
      removeConsole: true,
      removeDebugger: true,
    }),
  ],
});
