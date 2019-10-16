const path = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module:{
        rules:
            [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.html$/,
                    use: 'html-loader',
                }
            ]
    },
    plugins:[
        new HWP({
                inject: true,
                template: path.join(__dirname,'/src/index.html')
            }),
        new webpack.ProvidePlugin({
            'window.Quill': 'quill'
            })
    ]
}