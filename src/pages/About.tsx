import React from 'react';
import Helmet from 'react-helmet';

const About = () => {
	return (
		<>
			<Helmet
				title={'About - React with Typescript and Webpack'}
				meta={[
					{
						name: 'description',
						content: 'About - React with Typescript and Webpack'
					}
				]}
			/>
			<h1>About Page</h1>
		</>
	);
};

export default About;
