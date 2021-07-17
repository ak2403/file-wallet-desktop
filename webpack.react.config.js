const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');

const defaultInclude = [SRC_DIR];

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public', 'js'),
  },
  devtool: 'source-map',
  target: 'electron-renderer',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    }, {
      test: /\.js?$/,
      use: [{ loader: 'babel-loader' }],
      include: defaultInclude
    }, {
      test: /\.(jpe?g|png|gif)$/,
      use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
      include: defaultInclude
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
      include: defaultInclude
    }]
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  }
};