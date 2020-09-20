/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from '../../components/Header/Loadable';

import GlobalStyle from '../../global-styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DA3A33', // Add custome =color
    },
    secondary: {
      main: '#212121',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  );
}
