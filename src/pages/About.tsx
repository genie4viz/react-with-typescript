import React, { memo } from "react";
import Helmet from "react-helmet";
import Counter from "./Counter";

const About = memo(() => {
	return (
		<>
			<Helmet>
				<title>About - React with Typescript and Webpack</title>
				<meta name="description" content="About - React with Typescript and Webpack" />
			</Helmet>
			<h1>About Pages</h1>
			<Counter />
			<Counter />
		</>
	);
});

export default About;
