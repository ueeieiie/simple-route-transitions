const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test:/\.js/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },

    plugins:[
        new HtmlPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    devtool: 'source-maps'
}