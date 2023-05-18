const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
  entry: './src/client/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'Client',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html'
    }),
    new Dotenv({ systemvars: true }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
  ]
};
