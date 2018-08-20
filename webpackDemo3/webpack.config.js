const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'new IndexHtml'
        })
      ],
    output: {
        // filename: 'main.js',
        // path: path.resolve(__dirname, 'dist')
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};