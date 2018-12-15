import React from 'react';
import Helmet from 'react-helmet';

const Contact = () => {
	return (
		<>
			<Helmet
				title={'Contact - React with Typescript and Webpack'}
				meta={[
					{
						name: 'description',
						content: 'Contact - React with Typescript and Webpack'
					}
				]}
			/>
			<h1>Contact Page</h1>
		</>
	);
};

export default Contact;
