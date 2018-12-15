import React from 'react';
import { render } from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { theme, generateClassName } from './theme';

import AppProvider from 'utils/store/AppProvider';
import { store } from './store';
import App from './App';

import * as serviceWorker from './serviceWorker';

function renderApp() {
	const rootElement = document.getElementById('root')!;

	render(
		<AppProvider store={store}>
			<MuiThemeProvider theme={theme}>
				<StylesProvider generateClassName={generateClassName}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<App />
					</ThemeProvider>
				</StylesProvider>
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
