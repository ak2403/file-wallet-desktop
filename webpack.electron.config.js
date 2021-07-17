const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  target: 'electron-main',
  module: {
    rules: [{
      test: /\.js?$/,
      use: { loader: 'babel-loader' },
      exclude: /node_modules/,
    }]
  }  
};