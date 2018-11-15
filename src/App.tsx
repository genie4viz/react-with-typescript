import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, withLazy, Loading, ErrorBoundary } from 'components/shared';

const Home = withLazy(() => import('pages/Home'));
const About = withLazy(() => import('pages/About'));
const Contact = withLazy(() => import('pages/Contact'));
const Counter = withLazy(() => import('pages/Counter'));
const NotFound = withLazy(() => import('pages/NotFound'));

export default () => (
	<Router>
		<Layout>
			<ErrorBoundary>
				<Suspense fallback={<Loading />}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/counter' component={Counter} />
						<Route key='NotFound' component={NotFound} />
					</Switch>
				</Suspense>
			</ErrorBoundary>
		</Layout>
	</Router>
);
