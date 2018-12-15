import { useMemo, useReducer } from 'react';

const useLocalState = <S, A extends { [key: string]: any }>(
	reducer: (state: S, action: any) => S,
	actionCreators: A,
	initialState?: S
): [S, A] => {
	const localState = reducer(initialState!, { type: '__INITIALIZE_LOCAL_STATE__' });
	const [state, dispatch] = useReducer(reducer, localState);

	const actions = useMemo(
		() => {
			const retActions = {} as A;

			Object.keys(actionCreators).forEach(key => {
				retActions[key] = async (...args: any[]) => dispatch(await actionCreators[key](...args));

				return retActions[key];
			});

			return retActions;
		},
		[actionCreators]
	);

	return [state, actions];
};

export default useLocalState;
