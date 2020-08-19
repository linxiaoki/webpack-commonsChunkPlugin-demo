// 多文件入口，使用插件，生成 comab.js 文件
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        a: './app/a.js',
        b: './app/b.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
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
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'comab',
            filename: 'comab.js'
        })
    ]
}