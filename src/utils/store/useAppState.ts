import { useContext, useMemo } from 'react';
import { RootContext, AppContext } from './AppContext';

interface Action {
	(...args: any[]): any;
}

interface ActionCreator {
	[key: string]: Action;
}

const useAppState = <
	AppState extends { [key: string]: any },
	State extends Object,
	Actions extends ActionCreator
>(
	selector: (appState: AppState) => State,
	actionCreators: Actions
): [State, Actions] => {
	const [bits, dispatch] = useContext(RootContext);
	const observedBits = Number(selector(bits));
	const appState = useContext(AppContext, observedBits);
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
