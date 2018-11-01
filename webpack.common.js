const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pageTitle = 'BaseReactProject';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // input
  entry: path.join(__dirname, 'src/js/app.jsx'),

  // output
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/assets',
    library: 'Main',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: pageTitle,
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'src', 'img'),
      to: path.join(__dirname, 'dist', 'img'),
      toType: 'dir',
    }]),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'src', 'media'),
      to: path.join(__dirname, 'dist', 'media'),
      toType: 'dir',
    }]),
  ],

  // transformations
  module: {
    rules: [{
      test: /\.jsx?/i,
      include: [path.resolve(__dirname, './src')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'react'],
          plugins: ['transform-runtime'],
        },
      },
    }, {
      test: /\.scss$/,
      use: [
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS
      ],
    }, {
      test: /\.(png|gif|woff|woff2|jp(e*)g|eot|otf|ttf|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 8000,
        name: 'images/[hash]-[name].[ext]',
      },
    }],
  },
};
