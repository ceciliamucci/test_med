const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'bundle.js', // Nombre del archivo combinado
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Procesa archivos .js
        exclude: /node_modules/,
        use: 'babel-loader', // Transforma código ES6+ a ES5
      },
      {
        test: /\.css$/, // Procesa archivos .css
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extrae y procesa CSS
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(), // Minifica JavaScript
    new MiniCssExtractPlugin({ filename: 'styles.css' }), // Genera un archivo CSS separado
  ],
};
