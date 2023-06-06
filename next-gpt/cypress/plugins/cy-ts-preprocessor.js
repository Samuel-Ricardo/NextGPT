const wp = require('@cypress/webpack-preprocessor');
const path = require('path');

const webPackOptions = {
   resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias:{
      '@': path.resolve(__dirname, '../../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};

const options = {
  webPackOptions
}

module.exports = wp(options);
