const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const vendorObj = require('./webpack/vendors');
const modules = require('./webpack/modules');
const plugins = require('./webpack/plugins');
const resolve = require('./webpack/resolve');
const optimization = require('./webpack/optimization');
const node_modules_dir = path.resolve(__dirname, 'node_modules');

const config = {
  mode: 'development',
  entry: {
    // 'babel-polyfill', // 解決ie問題
    bundle: ['babel-polyfill', './index.js'],
    vendor: vendorObj.vendor,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js'
  }
};

module.exports = config;

module.exports = merge(
  config,
  resolve,
  optimization,
  modules(true),
  plugins('./index.html')
);
