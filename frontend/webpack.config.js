const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = function (env) {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      port: 8080,
      open: 'Google Chrome',
      proxy: {
        '/': {
          target: 'http://localhost:3000',
        },
      },
      historyApiFallback: true,
    },
    devtool: env.development ? 'source-map' : '',
  };
};
