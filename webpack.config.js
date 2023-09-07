const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './frontend/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'), //__dirname pega o diretorio que arquivo está
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/, // $ é para pegar somente os itens da string ex: js, css, img, etc
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map',
};