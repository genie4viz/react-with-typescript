import React, { memo } from 'react';
import Helmet from 'react-helmet';

const Contact = memo(() => {
	return (
		<>
			<Helmet>
				<title>Contact - React with Typescript and Webpack</title>
				<meta name="description" content="Contact - React with Typescript and Webpack" />
			</Helmet>
			<h1>Contact Pages</h1>
		</>
	);
});

export default Contact;
