const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SourceDirectory = path.resolve(__dirname, 'src');
const defaultInclude = [SourceDirectory];

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: './',
    globalObject: 'self',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ts)x?$/,
        use: [{ loader: 'babel-loader' }],
        include: defaultInclude,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'url-loader?limit=100000' }],
        include: defaultInclude,
      },
    ],
  },
  target: 'web',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4005,
    devMiddleware: {
      publicPath: '/',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};
