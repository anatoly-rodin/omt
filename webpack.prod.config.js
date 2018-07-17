const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            //CSS
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        'sass-loader',
                    ]
                })
            },
            // Images
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images/',
                    publicPath: 'assets/images/'
                }
            },
            // Images
            {
                test: /\.(svg)(\?.*)?$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {},
                },
            },
            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('/assets/css/omt.min.css', {
            filename: '/assets/css/omt.min.css',
            disable: false
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/assets/images/',
                to: 'assets/images/',
                ignore: ['*.svg']
            }
        ])
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    performance: {
        hints: false
    }
};
