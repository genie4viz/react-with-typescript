import createRootReducer from './createRootReducer';

type AppState = { [key: string]: any };

const createStore = <State extends AppState>(props: {
	reducers: any;
	initialState: undefined | State;
}) => {
	const { reducers, initialState } = props;

	const reducer = createRootReducer(reducers);
	const state: State = reducer(initialState || undefined, {
		type: '__INITIALIZE_APP_STATE__'
	});

	const bits: State = {} as any;

	Object.keys(state).forEach((value, index) => {
		bits[value] = 0;
		bits[value] |= 1 << index % 31;
	});

	return { state, reducer, bits };
};

export default createStore;
