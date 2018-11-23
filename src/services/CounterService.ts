//#region Action

enum ActionType {
	Increment = 'COUNTER__INCREMENT',
	Decrement = 'COUNTER__DECREMENT'
}

interface IncrementAction {
	type: ActionType.Increment;
}

interface DecrementAction {
	type: ActionType.Decrement;
}

//#endregion

//#region  Action Creators

export const actionCreators = {
	increment: () => <IncrementAction>{ type: ActionType.Increment },
	decrement: () => <DecrementAction>{ type: ActionType.Decrement }
};

//#endregion

//#region State

export interface State {
	count: number;
}

const initialState: State = {
	count: 0
};

//#endregion

//#region Reducer

type Action = IncrementAction | DecrementAction;

export const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case ActionType.Increment:
			return { count: state.count + 1 };
		case ActionType.Decrement:
			return { count: state.count - 1 };
		default:
			return state || initialState;
	}
};

//#endregion
