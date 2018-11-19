import { useContext } from 'react';
import AppContext from './AppContext';

interface Action {
	(...args: any[]): any;
}

interface ActionCreator {
	[key: string]: Action;
}

const useAppState = <AppState extends Object, State extends Object, Actions extends ActionCreator>(
	getStateFn: (appState: AppState) => State,
	actions: Actions
): [State, Actions] => {
	const [state, dispatch] = useContext(AppContext);
	const stateObj = getStateFn(state);
	const actionsObj = {} as Actions;
	const actionKeys = Object.keys(actions);

	for (let i = 0; i < actionKeys.length; i++) {
		const key = actionKeys[i];
		const action = actions[key];

		actionsObj[key] = (...args: any[]) => dispatch(action(...args));
	}

	return [stateObj, actionsObj];
};

export default useAppState;
