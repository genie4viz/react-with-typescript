import { withLazy, Layout } from 'components/shared';
import { RouteConfig } from 'react-router-config';

const Home = withLazy(() => import('pages/Home'));
const About = withLazy(() => import('pages/About'));
const Contact = withLazy(() => import('pages/Contact'));
const Counter = withLazy(() => import('pages/Counter'));
const NotFound = withLazy(() => import('pages/NotFound'));

const routes: RouteConfig[] = [
	{
		component: Layout,
		routes: [
			{
				path: '/',
				exact: true,
				component: Home
			},
			{
				path: '/about',
				exact: true,
				component: About
			},
			{
				path: '/contact',
				exact: true,
				component: Contact
			},
			{
				path: '/counter',
				exact: true,
				component: Counter
			},
			{
				component: NotFound
			}
		]
	}
];

export default routes;
