import { useContext } from 'react';
import AppContext from './AppContext';

interface Action {
	(...args: any[]): any;
}

interface ActionCreator {
	[key: string]: Action;
}

const useAppState = <AppState extends Object, State extends Object, Actions extends ActionCreator>(
	selector: (appState: AppState) => State,
	actionCreators: Actions
): [State, Actions] => {
	const [appState, dispatch] = useContext(AppContext);
	const state = selector(appState);
	const actions = {} as Actions;

	Object.keys(actionCreators).forEach(key => {
		const action = actionCreators[key];

		actions[key] = (...args: any[]) => dispatch(action(...args));
	});

	return [state, actions];
};

export default useAppState;
