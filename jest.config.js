'use strict';

module.exports = {
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}'
	],
	testEnvironment: 'jsdom',
	testURL: 'http://localhost',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/config/jest/babelTransform.js',
		'^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
		'^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
	},
	transformIgnorePatterns: [
		'[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
		'^.+\\.module\\.(css|sass|scss)$'
	],
	moduleNameMapper: {
		'^react-native$': 'react-native-web',
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
		'^static/(.*)$': '<rootDir>/static/*',
		'^configs/(.*)$': '<rootDir>/src/configs/$1',
		'^core/(.*)$': '<rootDir>/src/core/$1',
		'^utils/(.*)$': '<rootDir>/src/utils/$1',
		'^api/(.*)$': '<rootDir>/src/api/$1',
		'^store/(.*)$': '<rootDir>/src/store/$1',
		'^components/(.*)$': '<rootDir>/src/components/$1',
		'^pages/(.*)$': '<rootDir>/src/pages/$1'
	},
	moduleFileExtensions: [
		'web.js',
		'js',
		'web.ts',
		'ts',
		'web.tsx',
		'tsx',
		'json',
		'web.jsx',
		'jsx',
		'node'
	]
};
