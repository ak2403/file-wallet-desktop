const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'main');

const defaultInclude = [SRC_DIR];

module.exports = [
  {
    mode: 'development',
    entry: './main/index.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          use: { loader: 'babel-loader' },
          include: defaultInclude,
        },
      ],
    },
    externals: [
      {
        bufferutil: 'bufferutil',
        'utf-8-validate': 'utf-8-validate',
      },
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
  },
  {
    entry: './main/preload.js',
    target: 'electron-preload',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'preload.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          use: { loader: 'babel-loader' },
          include: defaultInclude,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
  },
];
