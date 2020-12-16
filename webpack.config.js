const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  plugins: [new Dotenv(), new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    hot: true,
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
module.exports = config;
