//单入口，从children chunk抽离 common.js
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
    },
    plugins: [
        //  new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest',
        //     minChunks: Infinity
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: 'children-async',
            name: ['main']
        })   
    ]
}