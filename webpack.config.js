const path = require('path');

module.exports = {
  entry: './src/index.js', // archivo de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // carpeta donde se guardará la compilación de tu aplicación
    filename: 'bundle.js', // nombre del archivo compilado
  },
  module: {
    rules: [
      {
        test: /\.js$/, // extensiones de archivos que quieres procesar con Babel
        exclude: /node_modules/, // carpeta que no quieres procesar con Babel
        use: {
          loader: 'babel-loader', // cargador de Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // presets de Babel
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // carpeta a servir
    compress: true,
    port: 9000,
  },
};
