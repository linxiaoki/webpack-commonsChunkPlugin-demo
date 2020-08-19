// 单入口，将第三方依赖抽离
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './app/index.js',
        vendor: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "chunk-[name].js",
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
            name: 'vendor',
            filename: '[name].js'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main'],
            children: true,
            async: 'children-async'
        })
    ]
}