import React from "react";
import Helmet from "react-helmet";
import { Button, Typography } from "@material-ui/core";
import useAppState from "appState/useAppState";
import { AppState } from "../services";
import { actionCreators } from "services/CounterService";

const Counter = () => {
	const [state, actions] = useAppState((state: AppState) => state.counter, actionCreators);

	return (
		<>
			<Helmet>
				<title>Counter - React with Typescript and Webpack</title>
				<meta name="description" content="Counter - React with Typescript and Webpack" />
			</Helmet>
			<Typography variant="h1">Counter Pages</Typography>
			<Typography variant="h3">
				Current count: <strong>{state.count}</strong>
			</Typography>
			<br />
			<Button variant="outlined" color="primary" onClick={() => actions.increment()}>
				Increment
			</Button>
			<Button variant="outlined" color="primary" onClick={() => actions.decrement()}>
				Decrement
			</Button>
		</>
	);
};

export default Counter;
