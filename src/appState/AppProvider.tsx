import React, { memo, useReducer } from 'react';
import AppContext from './AppContext';

interface IAppProviderProps {
	reducer: any;
	initialState?: object;
	children?: React.ReactNode;
}

const AppProvider = memo((props: IAppProviderProps) => {
	const { reducer, initialState, children } = props;
	const preloadedState = initialState || reducer(undefined, { type: '__INITIALIZE_APP_STATE__' });
	const [state, dispatch] = useReducer(reducer, preloadedState);

	return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
});

export default AppProvider;
