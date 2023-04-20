const path = require('path');

const SourceDirectory = path.resolve(__dirname, 'main');
const defaultInclude = [SourceDirectory];

module.exports = [
  {
    mode: 'development',
    entry: './main/index.ts',
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
    entry: './main/preload.ts',
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
