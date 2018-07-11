const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					},
					postcss: [require('autoprefixer')()]
				}
			},
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
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]'
				}
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
		new ExtractTextPlugin('/assets/omt.min.css', {
			filename: '/assets/omt.min.css',
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
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false
			}
		})
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
