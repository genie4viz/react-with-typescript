import { useContext } from 'react';
import AppContext from './AppContext';

interface Action {
	(...args: any[]): any;
}

interface ActionCreator {
	[key: string]: Action;
}

const useAppState = <S extends Object, SS extends Object, A extends ActionCreator>(
	getStateFn: (appState: S) => SS,
	actionCreators: A
): [SS, A] => {
	const [state, dispatch] = <[S, React.Dispatch<any>]>useContext(AppContext);
	const stateObj = getStateFn(state);
	const actionObj = {} as A;
	const actionCreatorKeys = Object.keys(actionCreators);

	for (let i = 0; i < actionCreatorKeys.length; i++) {
		const key = actionCreatorKeys[i];
		const actionCreator = actionCreators[key];

		if (typeof actionCreator === 'function') {
			actionObj[key] = (...args: any[]) => dispatch(actionCreator(...args));
		}
	}

	return [stateObj, actionObj];
};

export default useAppState;
