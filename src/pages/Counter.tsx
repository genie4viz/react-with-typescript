import React from 'react';
import Helmet from 'react-helmet';
import { Button, Typography } from '@material-ui/core';
import useAppState from 'appState/useAppState';
import { ApplicationState } from '../store';
import { actionCreators } from 'store/Counter';

const Counter = () => {
	const [state, actions] = useAppState(
		(state: ApplicationState) => state.counter,
		actionCreators
	);

	return (
		<>
			<Helmet>
				<title>CounterX - React with Typescript and Webpack</title>
				<meta name='description' content='CounterX - React with Typescript and Webpack' />
			</Helmet>
			<Typography variant='h1'>Counter Pages</Typography>
			<Typography variant='h3'>
				Current count: <strong>{state.count}</strong>
			</Typography>
			<br />
			<Button variant='outlined' color='primary' onClick={() => actions.increment()}>
				Increment
			</Button>
			<Button variant='outlined' color='primary' onClick={() => actions.decrement()}>
				Decrement
			</Button>
		</>
	);
};

export default Counter;
