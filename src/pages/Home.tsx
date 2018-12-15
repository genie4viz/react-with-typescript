import React from 'react';
import Helmet from 'react-helmet';

const Home = () => {
	return (
		<>
			<Helmet
				title={'Home - React with Typescript and Webpack'}
				meta={[
					{
						name: 'description',
						content: 'Home - React with Typescript and Webpack'
					}
				]}
			/>
			<h1>Hello world!</h1>
		</>
	);
};

export default Home;
