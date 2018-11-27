import { useContext, useMemo } from 'react';
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

	const actions = useMemo(
		() => {
			const retActions = {} as Actions;

			Object.keys(actionCreators).forEach(key => {
				retActions[key] = (...args: any[]) => dispatch(actionCreators[key](...args));

				return retActions[key];
			});

			return retActions;
		},
		[actionCreators]
	);

	return [state, actions];
};

export default useAppState;
