import React, { memo } from "react";
import Helmet from "react-helmet";

const Home = memo(() => {
	return (
		<>
			<Helmet>
				<title>Home - React with Typescript and Webpack</title>
				<meta name="description" content="Home - React with Typescript and Webpack" />
			</Helmet>
			<h1>Hello world!</h1>
		</>
	);
});

export default Home;
