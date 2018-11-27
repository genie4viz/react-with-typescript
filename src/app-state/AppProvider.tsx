import React, { useReducer, useMemo } from 'react';
import AppContext from './AppContext';

type AppProviderProps = {
	value: {
		initialState: undefined | Object;
		reducer: any;
	};
	children?: React.ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
	const { value, children } = props;
	const { reducer } = value;

	const state = useMemo(() => {
		return value.initialState || reducer(undefined, { type: '__INITIALIZE_APP_STATE__' });
	}, []);

	const [appState, dispatch] = useReducer(reducer, state);

	return <AppContext.Provider value={[appState, dispatch]}>{children}</AppContext.Provider>;
};

export default AppProvider;
