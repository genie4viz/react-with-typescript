import React, { useReducer } from "react";
import AppContext from "./AppContext";

type AppProviderProps = {
	value: any;
	children?: React.ReactNode;
};

const AppProvider = React.memo((props: AppProviderProps) => {
	const { value, children } = props;
	const [appState, dispatch] = useReducer(value.reducer, value.appState);

	return <AppContext.Provider value={[appState, dispatch]}>{children}</AppContext.Provider>;
});

export default AppProvider;
