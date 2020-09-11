/* eslint-disable react/no-unused-prop-types */
/**
 * NOTE: App.react.js
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-smartbanner/dist/main.css';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import 'react-dates/initialize';
import GlobalStyle from '../../global-styles';

import NotFoundPage from '../NotFoundPage/Loadable';
import Signin from '../Signin/Loadable';
import Home from '../Home/Loadable';
import ShishyaHome from '../ShishyaHome/Loadable';
import GuruCourses from '../GuruCourses/Loadable';
import { AppContainer } from './style';

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
          ...green,
          A400: '#00a465',
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
              <Route exact path="/GuruHome" component={Home} />
              <Route exact path="/ShishyaHome" component={ShishyaHome} />
              <Route exact path="/GuruCourses" component={GuruCourses} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={Signin} />
              <Route exact path="*" component={NotFoundPage} />
            </Switch>
          </AppContainer>
          <GlobalStyle />
        </MuiThemeProvider>
      );
    return null;
  }
}
