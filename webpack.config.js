const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'public');
const APP_DIR = path.join(__dirname, 'src');

module.exports = {
    entry: path.join(APP_DIR, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(BUILD_DIR),
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
        historyApiFallback: true,
        compress: true,
        index: 'index.html'
    },

    plugins:[
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    devtool: 'source-maps'
}