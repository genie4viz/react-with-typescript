import React, { Suspense } from 'react';
import { Router } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';

import { ErrorBoundary, Loading } from 'components/shared';
import routes from './routes';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const history = createBrowserHistory({ basename: baseUrl });

const App = () => {
	return (
		<Router history={history}>
			<ErrorBoundary>
				<Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
			</ErrorBoundary>
		</Router>
	);
};

export default App;
