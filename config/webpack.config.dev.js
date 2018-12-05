'use strict';

const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');

module.exports = {
	mode: 'development',
	entry: {
		main: path.join(paths.src, 'main.tsx')
	},
	output: {
		path: paths.dist,
		filename: 'static/js/[name].js',
		chunkFilename: 'static/js/[name].chunk.js',
		publicPath: paths.public,
		devtoolModuleFilenameTemplate: info =>
			path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
	},
	module: {
		rules: [
			{
				oneOf: [
					{
						test: /\.(j|t)sx?$/,
						include: /src/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
							options: {
								babelrc: false,
								presets: ['@babel/preset-env', '@babel/typescript', '@babel/preset-react'],
								plugins: [
									'@babel/plugin-syntax-dynamic-import',
									'@babel/plugin-proposal-class-properties',
									'@babel/plugin-proposal-object-rest-spread',
									[
										'transform-imports',
										{
											'@material-ui/core': {
												transform: function(importName) {
													return `@material-ui/core/${importName}`;
												},
												preventFullImport: true
											},
											'@material-ui/lab': {
												transform: function(importName) {
													return `@material-ui/lab/${importName}`;
												},
												preventFullImport: true
											},
											'@material-ui/styles': {
												transform: function(importName) {
													return `@material-ui/styles/${importName}`;
												},
												preventFullImport: true
											},
											'@material-ui/icons': {
												transform: function(importName) {
													return `@material-ui/icons/${importName}`;
												},
												preventFullImport: true
											}
										}
									]
									// 'react-hot-loader/babel'
								],
								cacheDirectory: true,
								cacheCompression: false,
								compact: false,
								highlightCode: true,
								sourceMaps: false
							}
						}
					},
					{
						test: /\.(sa|sc|c)ss$/,
						use: ['style-loader', 'css-loader', 'sass-loader']
					},
					{
						test: /\.(bmp|gif|jpe?g|png|svg)$/,
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'static/media/[name].[hash:8].[ext]'
						}
					},
					{
						exclude: /\.(js|jsx|ts|tsx|html|json)$/,
						loader: 'file-loader',
						options: {
							name: 'static/media/[name].[hash:8].[ext]'
						}
					}
				]
			}
		]
	},
	resolve: {
		modules: ['node_modules', paths.src],
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			static: path.resolve(paths.root, 'static'),
			configs: path.resolve(paths.src, 'configs'),
			core: path.resolve(paths.src, 'core'),
			utils: path.resolve(paths.src, 'utils'),
			api: path.resolve(paths.src, 'api'),
			store: path.resolve(paths.src, 'store'),
			components: path.resolve(paths.src, 'components'),
			pages: path.resolve(paths.src, 'pages')
		}
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\\/]node_modules[\\\/]/,
					name: 'vendor',
					chunks: 'all',
					priority: 20
				},
				common: {
					name: 'common',
					minChunks: 2,
					chunks: 'all',
					priority: 10,
					reuseExistingChunk: true,
					enforce: true
				}
			}
		},
		runtimeChunk: 'single',
		namedChunks: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './static/index.html',
			baseUrl: paths.public,
			favicon: './static/favicon.ico'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}),
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].css',
			chunkFilename: 'static/css/[name].chunk.css'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CaseSensitivePathsPlugin(),
		new BundleAnalyzerPlugin(),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
	],
	devServer: {
		compress: true,
		contentBase: paths.src,
		historyApiFallback: true,
		host: '127.0.0.1',
		port: '8080',
		open: 'firefox',
		hot: true,
		inline: true,
		overlay: true,
		publicPath: paths.public,
		watchContentBase: false,
		stats: {
			modules: false
		}
	},
	devtool: 'cheap-module-source-map',
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
	performance: false,
	bail: true
};
