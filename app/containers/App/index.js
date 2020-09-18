/* eslint-disable react/no-unused-prop-types */
/**
 * NOTE: App.react.js
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-smartbanner/dist/main.css';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import 'react-dates/initialize';
import GlobalStyle from '../../global-styles';
import Loader from '../../components/Loader';
import NotFoundPage from '../NotFoundPage/Loadable';
import Signin from '../Signin/Loadable';
import SignUp from '../SignUp/Loadable';
import Home from '../Home/Loadable';
import ShishyaHome from '../ShishyaHome/Loadable';
import Courses from '../Courses/Loadable';
import Sessions from '../Sessions/Loadable';
import Articles from '../Articles/Loadable';
import Videos from '../Videos/Loadable';
import GuruCourses from '../GuruCourses/Loadable';
import CoursesDetails from '../CoursesDetails/Loadable';
import { AppContainer } from './style';

// Routing hooks
import CheckAuthenticationHook from '../../utils/CheckAuthenticationHook';
import RedirectToDashboardHook from '../../utils/RedirectToDashboardHook';
import PageNotFoundHook from '../../utils/PageNotFoundHook';

// const GlobalStyle = lazy(() => import('../../global-styles'));

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {
      theme: {},
    };
  }

  componentDidMount() {
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true,
      },
      palette: {
        primary: {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#ef5350',
          400: '#ef5350',
          500: '#DA3A33',
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
          A100: '#ff8a80',
          A200: '#ff5252',
          A400: '#ff1744',
          A700: '#d50000',
        }, // Purple and green play nicely together.
        secondary: {
          main: '#212121',
        },
        error: red,
      },
    });
    // window.addEventListener('resize', this.updateDimensions);
    this.setState({
      theme,
    });
  }

  render() {
    if (Object.keys(this.state.theme).length)
      return (
        <MuiThemeProvider theme={this.state.theme}>
          <AppContainer>
            <Switch>
              <Route exact path="/signin" component={RedirectToDashboardHook(Signin)} />
              <Route exact path="/signup" component={RedirectToDashboardHook(SignUp)} />

              <Route exact path="/home" component={CheckAuthenticationHook(ShishyaHome, true)} />

              <Route exact path="/courses" component={CheckAuthenticationHook(Courses, true)} />
              <Route exact path="/courses/:id" component={CheckAuthenticationHook(CoursesDetails, true)} />

              <Route exact path="/articles" component={CheckAuthenticationHook(Articles, true)} />
              <Route exact path="/videos" component={CheckAuthenticationHook(Videos, true)} />

              <Route exact path="/sessions" component={CheckAuthenticationHook(Sessions, true)} />

              <Route exact path="/GuruHome" component={CheckAuthenticationHook(Home, true)} />
              <Route exact path="/GuruCourses" component={GuruCourses} />
              <Route exact path="*" component={PageNotFoundHook(NotFoundPage)} />
            </Switch>
          </AppContainer>
          <Loader />
          <GlobalStyle />
        </MuiThemeProvider>
      );
    return null;
  }
}
