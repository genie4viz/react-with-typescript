//#region Action

enum ActionType {
	INCREMENT = 'COUNTER__INCREMENT',
	DECREMENT = 'COUNTER__DECREMENT'
}

interface IncrementAction {
	type: ActionType.INCREMENT;
}

interface DecrementAction {
	type: ActionType.DECREMENT;
}

//#endregion

//#region  Action Creators

export const actionCreators = {
	increment: () => <IncrementAction>{ type: ActionType.INCREMENT },
	decrement: () => <DecrementAction>{ type: ActionType.DECREMENT }
};

//#endregion

//#region State

export interface IState {
	count: number;
}

const initialState: IState = {
	count: 0
};

//#endregion

//#region Reducer

type Action = IncrementAction | DecrementAction;

export const reducer = (state: IState, action: Action) => {
	switch (action.type) {
		case ActionType.INCREMENT:
			return { count: state.count + 1 };
		case ActionType.DECREMENT:
			return { count: state.count - 1 };
		default:
			return state || initialState;
	}
};

//#endregion
