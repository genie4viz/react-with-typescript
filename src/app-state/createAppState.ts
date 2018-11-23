type AppStateProps = {
	initialState?: object;
	reducer: any;
};

const createAppState = (props: AppStateProps) => {
	const { initialState, reducer } = props;
	const appState = reducer(undefined, { type: '__INITIALIZE_APP_STATE__' });

	if (initialState) {
		Object.assign(appState, initialState);
	}

	return { appState, reducer };
};

export default createAppState;
