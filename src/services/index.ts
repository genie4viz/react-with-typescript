import * as CounterService from './CounterService';
import createAppState from 'app-state/createAppState';
import createRootReducer from 'app-state/createRootReducer';

export interface AppState {
	counter: CounterService.State;
}

export const rootReducer = createRootReducer({
	counter: CounterService.reducer
});

export const appState = createAppState({ initialState: undefined, reducer: rootReducer });
