import React, { memo } from "react";
import Helmet from "react-helmet";

const About = memo(() => {
	return (
		<>
			<Helmet>
				<title>About - React with Typescript and Webpack</title>
				<meta name="description" content="About - React with Typescript and Webpack" />
			</Helmet>
			<h1>About Pages</h1>
		</>
	);
});

export default About;
