import * as Counter from './Counter';
import combineReducers from 'appState/combineReducers';

export interface ApplicationState {
	counter: Counter.CounterState;
}

export const rootReducer = combineReducers({ counter: Counter.reducer });
