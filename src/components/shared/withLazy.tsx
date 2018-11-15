import React, { ComponentType, StatelessComponent, lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';

const withLazy = (
	importFn: () => Promise<{ default: ComponentType<any> }>
): StatelessComponent => props => {
	const Component = lazy(importFn);

	return (
		<ErrorBoundary>
			<Component {...props} />
		</ErrorBoundary>
	);
};

export default withLazy;
