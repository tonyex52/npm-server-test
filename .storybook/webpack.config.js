const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../'),
        exclude: [/bower_components/, /node_modules/, /styles/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react']
          }
        }
      },
      {
        test: /\.[scss|less]$/,
        loaders: ["style-loader", "css-loader", "sass-loader", "less-loader"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}