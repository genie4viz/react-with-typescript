import React, { ComponentType, lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';

const withLazy = <P extends Object, T extends ComponentType<any>>(
	factory: () => Promise<{ default: T }>
) => {
	const WithLazy = (props: P) => {
		const Component = lazy(factory);

		return (
			<ErrorBoundary>
				<Component {...props} />
			</ErrorBoundary>
		);
	};

	return WithLazy;
};

export default withLazy;
