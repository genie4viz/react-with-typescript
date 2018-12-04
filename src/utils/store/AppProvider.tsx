import React, { useReducer, useMemo } from 'react';
import { RootContext, AppContext } from './AppContext';

type AppProviderProps = {
	value: {
		reducer: any;
		state: undefined | Object;
		bits: undefined | Object;
	};
	children?: React.ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
	const {
		value: { reducer, state, bits },
		children
	} = props;

	const [appState, dispatch] = useReducer(reducer, state);
	const rootValue = useMemo(() => [bits, dispatch], []);

	return (
		<RootContext.Provider value={rootValue}>
			<AppContext.Provider value={appState}>{children}</AppContext.Provider>
		</RootContext.Provider>
	);
};

export default AppProvider;
