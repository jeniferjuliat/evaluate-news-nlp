const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  devtool: 'source-map',
  stats: 'verbose',
  devServer: {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/html; charset=utf-8",
        "X-Content-Type-Options": "nosniff"
    },
    port: 8081, // define a porta do servidor
    open: true, // abre a página automaticamente no navegador após iniciar o servidor
    proxy: {
      '/api': 'http://localhost:8081' // redireciona as chamadas da API para o servidor do Express na porta 8081
    },
    historyApiFallback: true, // habilita a navegação com a API do navegador
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
    }),
    new Dotenv(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000, // 5MB
    }),
     new webpack.HotModuleReplacementPlugin(),
  ]
}
