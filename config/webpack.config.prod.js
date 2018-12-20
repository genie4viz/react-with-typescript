'use strict';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SafeParser = require('postcss-safe-parser');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const paths = require('./paths');

module.exports = {
	mode: 'production',
	entry: {
		main: path.join(paths.src, 'main.tsx')
	},
	output: {
		path: paths.dist,
		filename: 'static/js/[name].[chunkhash:8].js',
		chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
		publicPath: paths.public
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
									'@babel/plugin-transform-runtime',
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
								],
								cacheDirectory: true,
								cacheCompression: true,
								compact: false,
								highlightCode: true,
								sourceMap: false
							}
						}
					},
					{
						test: /\.(sa|sc|c)ss$/,
						use: [
							MiniCssExtractPlugin.loader,
							{
								loader: 'css-loader',
								options: {
									importLoaders: 1,
									sourceMap: false
								}
							},
							{
								loader: 'postcss-loader',
								options: {
									ident: 'postcss',
									plugins: () => [
										require('postcss-flexbugs-fixes'),
										require('postcss-preset-env')({
											autoprefixer: {
												flexbox: 'no-2009'
											},
											stage: 3
										})
									],
									sourceMap: false
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: false
								}
							}
						]
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
						exclude: /\.(js|mjs|jsx|ts|tsx|html|json)$/,
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
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8
					},
					compress: {
						ecma: 5,
						warnings: false,
						comparisons: false,
						inline: 2
					},
					mangle: {
						safari10: true
					},
					output: {
						ecma: 5,
						comments: false,
						ascii_only: true
					}
				},
				parallel: true,
				cache: true,
				sourceMap: false
			}),
			new OptimizeCssAssetsPlugin({
				cssProcessorOptions: {
					parser: SafeParser,
					map: true,
					discardComments: {
						removeAll: true
					}
				}
			})
		],
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
		new CleanWebpackPlugin(paths.dist, {
			root: paths.root
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: './static/index.html',
			baseUrl: paths.baseUrl,
			favicon: './static/favicon.ico',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash:8].css',
			chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
		}),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new CompressionPlugin({
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.(js|css|html)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			exclude: [/\.map$/, /\.gz$/],
			importWorkboxFrom: 'cdn',
			navigateFallback: paths.public + '/200.html',
			navigateFallbackBlacklist: [new RegExp('^/_'), new RegExp('/[^/]+\\.[^/]+$')],
			swDest: 'service-worker.js',
			skipWaiting: true,
			precacheManifestFilename: 'precache-manifest.[manifestHash].js'
		})
	],
	devtool: 'source-map',
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
	performance: false,
	stats: {
		modules: false
	},
	bail: true
};
