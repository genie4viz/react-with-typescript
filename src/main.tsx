import 'static/style.scss';

import React from 'react';
import { render } from 'react-dom';

import AppProvider from 'appState/AppProvider';
import { rootReducer } from './services';
import App from './App';

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import * as serviceWorker from './serviceWorker';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: green
	},
	typography: {
		useNextVariants: true,
		button: {
			textTransform: 'capitalize'
		}
	},
	shape: {
		borderRadius: 0
	}
});

function renderApp() {
	const rootElement = document.getElementById('root')!;

	render(
		<AppProvider reducer={rootReducer}>
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
