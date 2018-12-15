import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { ErrorBoundary, Loading } from 'components/shared';
import routes from './routes';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;

const App = () => {
	return (
		<BrowserRouter basename={baseUrl}>
			<ErrorBoundary>
				<Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
			</ErrorBoundary>
		</BrowserRouter>
	);
};

export default App;
