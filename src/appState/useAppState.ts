import { useContext } from "react";
import AppContext from "./AppContext";

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
	const retState = getStateFn(state);
	const retActions = {} as Actions;
	const actionKeys = Object.keys(actions);

	actionKeys.forEach(key => {
		const action = actions[key];

		retActions[key] = (...args: any[]) => dispatch(action(...args));
	});

	return [retState, retActions];
};

export default useAppState;
