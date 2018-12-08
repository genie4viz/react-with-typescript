import React from 'react';
import { render } from 'react-dom';

import AppProvider from 'utils/store/AppProvider';
import { store } from './store';
import App from './App';

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import * as serviceWorker from './serviceWorker';

// Create a theme instance.
const theme = createMuiTheme({
	props: {
		MuiButtonBase: {
			disableRipple: true
		},
		MuiListItem: {
			disableRipple: true
		}
	},
	palette: {
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
	},
	transitions: {
    create: () => 'none',
  },
});

const generateClassName = createGenerateClassName({
	dangerouslyUseGlobalCSS: true,
	productionPrefix: 'rtw'
});

function renderApp() {
	const rootElement = document.getElementById('root')!;

	render(
		<AppProvider value={store}>
			<StylesProvider generateClassName={generateClassName}>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<App />
				</MuiThemeProvider>
			</StylesProvider>
		</AppProvider>,
		rootElement
	);
}

renderApp();

serviceWorker.unregister();

if (module.hot) {
	module.hot.accept('./App', renderApp);
}
