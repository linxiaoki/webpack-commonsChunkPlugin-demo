// 单文件入口，不使用插件
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        // a: './app/a.js',
        // b: './app/b.js'
        main: './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "chunk-[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}