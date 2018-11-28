import React, { useMemo, useReducer } from 'react';
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

	const initialState = useMemo(
		() => {
			return reducer(value.initialState || undefined, { type: '__INITIALIZE_APP_STATE__' });
		},
		[value]
	);

	const [appState, dispatch] = useReducer(reducer, initialState);

	return <AppContext.Provider value={[appState, dispatch]}>{children}</AppContext.Provider>;
};

export default AppProvider;
