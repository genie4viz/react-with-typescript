import 'static/style.scss';

import React from 'react';
import { render } from 'react-dom';

import AppProvider from 'app-state/AppProvider';
import { store } from './store';
import App from './App';

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import * as serviceWorker from './serviceWorker';

// Create a theme instance.
const theme = createMuiTheme({
	props: {
		MuiButtonBase: {
			disableRipple: true
		}
	},
	palette: {
		// primary: {
		// 	light: '#8BC34A',
		// 	main: '#4CAF50',
		// 	dark: '#009688',
		// 	contrastText: '#fff'
		// },
		// secondary: {
		// 	light: '#00BCD4',
		// 	main: '#03A9F4',
		// 	dark: '#2196F3',
		// 	contrastText: '#fff'
		// },
		// error: {
		// 	light: '#FF9800',
		// 	main: '#FF5722',
		// 	dark: '#F44336',
		// 	contrastText: '#fff'
		// },
		// text: {
		// 	primary: '#37474f',
		// 	secondary: '#546e7a',
		// 	disabled: '#78909C',
		// 	hint: '#B0BEC5'
		// },
		primary: {
			light: '#26c281',
			main: '#3fc380',
			dark: '#4daf7c',
			contrastText: '#fff'
		},
		secondary: {
			light: '#29f1c3',
			main: '#36d7b7',
			dark: '#4ecdc4',
			contrastText: '#fff'
		},
		error: {
			light: '#f89406',
			main: '#f9690e',
			dark: '#d35400',
			contrastText: '#fff'
		},
		text: {
			primary: '#24252a',
			secondary: '#2e3131',
			disabled: '#dadfe1',
			hint: '#abb7b7'
		}
	},
	typography: {
		fontFamily: '"Quicksand", sans-serif;',
		button: {
			textTransform: 'capitalize'
		},
		useNextVariants: true
	},
	shape: {
		borderRadius: 0
	},
	overrides: {
		MuiSvgIcon: {
			root: {
				fontSize: 20
			}
		}
	}
});

function renderApp() {
	const rootElement = document.getElementById('root')!;

	render(
		<AppProvider value={store}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</MuiThemeProvider>
		</AppProvider>,
		rootElement
	);
}

renderApp();

serviceWorker.unregister();

if (module.hot) {
	module.hot.accept('./App', renderApp);
}
