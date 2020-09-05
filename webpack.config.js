const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'OAuthClient',
    libraryTarget: 'umd'
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};