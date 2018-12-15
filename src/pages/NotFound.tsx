import React from 'react';
import Helmet from 'react-helmet';

type Props = {
	location: Location;
};

const NotFound = (props: Props) => {
	return (
		<>
			<Helmet
				title={'404 Not found - React with Typescript and Webpack'}
				meta={[
					{
						name: 'description',
						content: '404 Not found - React with Typescript and Webpack'
					}
				]}
			/>
			<h1>404 Not found</h1>
			<h2>
				No match found for <code>{props.location.pathname}</code>
			</h2>
		</>
	);
};

export default NotFound;
