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
// import Header from '../../components/Header/Loadable';
// NOTE: Container
import Home from '../Home/Loadable';
import CourseDetails from '../CourseDetails/Loadable';
import Course from '../Course/Loadable';
import Signin from '../Signin/Loadable';
import SignUp from '../SignUp/Loadable';
import Loader from '../../components/Loader/Loadable';
// Routing hooks
import CheckAuthenticationHook from '../../utils/CheckAuthenticationHook';
import RedirectToDashboardHook from '../../utils/RedirectToDashboardHook';
import PageNotFoundHook from '../../utils/PageNotFoundHook';

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
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path="/" component={NotFoundPage} /> */}
        <Route
          exact
          path="/signin"
          component={RedirectToDashboardHook(Signin, true)}
        />
        <Route
          exact
          path="/signup"
          component={RedirectToDashboardHook(SignUp, true)}
        />
        <Route
          exact
          path="/home"
          component={CheckAuthenticationHook(Home, true)}
        />
        <Route
          exact
          path="/course"
          component={CheckAuthenticationHook(Course, true)}
        />
        <Route
          exact
          path="/course/:courseId"
          component={CheckAuthenticationHook(CourseDetails, true)}
        />
        <Route exact path="*" component={PageNotFoundHook(NotFoundPage)} />
      </Switch>
      <GlobalStyle />
      <Loader />
    </ThemeProvider>
  );
}
