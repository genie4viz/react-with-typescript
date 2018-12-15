import * as Counter from './Counter';
import createStore from 'utils/store/createStore';

export default interface AppState {
	counter: Counter.State;
}

const reducers = {
	counter: Counter.reducer
};

export const store = createStore({
	reducers: reducers,
	initialState: undefined
});
