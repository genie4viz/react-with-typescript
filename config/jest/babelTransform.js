'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
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
	]
});
