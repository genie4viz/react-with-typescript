interface Reducer extends Function {
	(state: any, action: any): any;
}

interface Reducers {
	[key: string]: Reducer;
}

const combineReducers = (reducers: Reducers): Reducer => {
	const reducerKeys = Object.keys(reducers);
	const fnReducers = {} as Reducers;

	for (let i = 0; i < reducerKeys.length; i++) {
		const key = reducerKeys[i];

		if (typeof reducers[key] === 'function') {
			fnReducers[key] = reducers[key];
		}
	}

	const fnReducerKeys = Object.keys(fnReducers);

	return (state = {} as any, action: any): Reducer => {
		let hasChanged = false;
		const nextState = {} as any;

		for (let i = 0; i < fnReducerKeys.length; i++) {
			const key = fnReducerKeys[i];
			const reducer = fnReducers[key];
			const previousStateForKey = state[key];
			const nextStateForKey = reducer(previousStateForKey, action);

			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		}

		return hasChanged ? nextState : state;
	};
};

export default combineReducers;
