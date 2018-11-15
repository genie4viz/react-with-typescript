import React, { useReducer } from 'react';
import AppContext from './AppContext';

interface IAppProviderProps {
	reducer: any;
	initialState?: object;
	children?: React.ReactNode;
}

// class AppProvider extends PureComponent<IAppProviderProps> {
// 	constructor(props: IAppProviderProps) {
// 		super(props);

// 		this.state =
// 			props.initialState || props.reducer(undefined, { type: '__INITIALIZE_APP_STATE__' });
// 	}

// 	dispatch = (action: any) => {
// 		this.setState(prevState => this.props.reducer(prevState, action));
// 	};

// 	getValue = () => {
// 		return [this.state, this.dispatch];
// 	};

// 	render() {
// 		return (
// 			<AppContext.Provider value={this.getValue()}>{this.props.children}</AppContext.Provider>
// 		);
// 	}
// }

const AppProvider = (props: IAppProviderProps) => {
	const { reducer, initialState, children } = props;
	/* We can get the initial state by running the reducer with no state */
	const preloadedState = initialState || reducer(undefined, { type: '__INITIALIZE_APP_STATE__' });

	/* Create a global state */
	const [state, dispatch] = useReducer(reducer, preloadedState);

	return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
};

export default AppProvider;
