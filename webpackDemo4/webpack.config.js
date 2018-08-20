const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {//入口起点
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',//语法错位，指向源文件
    devServer: {
          contentBase: './dist'//修改配置文件，告诉开发服务器(dev server)，在哪里查找文件：
          //以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
        },
    plugins: [
        new CleanWebpackPlugin(['dist']),//清理 /dist 文件夹
        new HtmlWebpackPlugin({//生成新的index.html替代之前的
          title: 'new IndexHtml'
        })
      ],
    output: {
        // filename: 'main.js',
        // path: path.resolve(__dirname, 'dist')
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:"/",//publicPath 也会在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问，我们稍后再设置端口号

    }
};