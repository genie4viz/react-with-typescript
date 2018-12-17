import './bootstrap';

import React from 'react';
import { render } from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import AppProvider from 'utils/store/AppProvider';
import { store } from './store';
import App from './App';

import * as serviceWorker from './serviceWorker';

function renderApp() {
  const rootElement = document.getElementById('root')!;

  render(
    <AppProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AppProvider>,
    rootElement
  );
}

renderApp();

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept('./App', renderApp);
}
