import * as CounterService from './CounterService';
import combineReducers from 'appState/combineReducers';

export interface AppState {
	counter: CounterService.IState;
}

export const rootReducer = combineReducers({
	counter: CounterService.reducer
});
