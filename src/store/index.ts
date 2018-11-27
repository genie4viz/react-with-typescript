import * as Counter from './Counter';
import createRootReducer from 'app-state/createRootReducer';

export default interface AppState {
	counter: Counter.State;
}

const rootReducer = createRootReducer({
	counter: Counter.reducer
});

export const store = {
	initialState: undefined,
	reducer: rootReducer
};
