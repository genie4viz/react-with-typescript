interface Reducer extends Function {
	(state: any, action: any): any;
}

interface Reducers {
	[key: string]: Reducer;
}

const combineReducers = (reducers: Reducers): Reducer => {
	const reducerKeys = Object.keys(reducers);
	const fnReducers = {} as Reducers;

	reducerKeys.forEach(key => {
		if (typeof reducers[key] === "function") {
			fnReducers[key] = reducers[key];
		}
	});

	const fnReducerKeys = Object.keys(fnReducers);

	return (state = {} as any, action: any): Reducer => {
		let hasChanged = false;
		const nextState = {} as any;

		fnReducerKeys.forEach(key => {
			const reducer = fnReducers[key];
			const previousStateForKey = state[key];
			const nextStateForKey = reducer(previousStateForKey, action);

			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		});

		return hasChanged ? nextState : state;
	};
};

export default combineReducers;
