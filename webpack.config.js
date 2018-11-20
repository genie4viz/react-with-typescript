const devConfig = require("./config/webpack.config.dev.js");
const prodConfig = require("./config/webpack.config.prod.js");

module.exports = env => {
	const isDevBuild = env.NODE_ENV === "development" ? true : false;
	let clientConfig = {};

	if (isDevBuild) {
		clientConfig = devConfig;
	} else {
		clientConfig = prodConfig;
	}

	return [clientConfig];
};
