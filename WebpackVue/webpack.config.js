var HtmlwebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const path = require('path');
module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
     module: {
        rules: [
            {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                plugins: ['transform-runtime'],
                presets: ['es2015']
                }
            },
            {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
            }

        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: 'src/index.html'
        }),
        new UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8 : true },
            compress: { screw_ie8: true, warnings: false },
            comments: false
        }),

    ]
};
