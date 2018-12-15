const package = require('../package.json');
const path = require('path');

let baseUrl = '/';

let homepage = package.homepage;

if (homepage) {
	if (!homepage.endsWith('/')) {
		homepage += '/';
	}

	const homepageSegments = homepage.split('/');
	baseUrl = homepageSegments[homepageSegments.length - 1] + '/';
}

module.exports = {
	root: path.join(__dirname, '../'),
	src: path.join(__dirname, '../src/'),
	static: path.join(__dirname, '../static/'),
	dist: path.join(__dirname, '../dist/'),
	public: '/',
	baseUrl: baseUrl,
	name: package.name,
	version: package.version,
	description: package.description,
	author: package.author,
	license: package.license,
	private: package.private,
	repository: package.repository
};
