// module.exports = function(webpackConfig) {
//   webpackConfig.babel.plugins.push('antd');
//
//   // Fix ie8 compatibility
//   webpackConfig.module.loaders.unshift({
//     test: /\.jsx?$/,
//     loader: 'es3ify-loader',
//   });
//
//   return webpackConfig;
// };
// const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/entry/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    // contentBase: './dist'
  }
}

module.exports = config;
