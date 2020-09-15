/**
 *
 * SignUp
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withSizes from 'react-sizes';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSignUp from './selectors';
import reducer from '../Signin/reducer';
import { signupAction } from '../Signin/actions';

import RegistorNav from '../../components/RegistorNav/Loadable';
import RegistorFrom from '../../components/RegistorFrom/Loadable';
import Stapes from '../../components/Stapes/Loadable';
// import Authentication from '../../components/Authentication/Loadable';
// import Registration from '../../components/Registration/Loadable';

import { SigninContainer } from '../Signin/style';
import splashIMG from '../../images/splash.png';
import logoIMG from '../../images/logo.svg';

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.PureComponent {
  submitRegistration = values => {
    window.console.log('values', values);
    this.props.dispatch(signupAction());
  };

  render() {
    const { isMobile } = this.props;
    return (
      <SigninContainer>
        <Helmet>
          <title>Signup</title>
          <meta name="description" content="Description of Signin" />
        </Helmet>
        <div className="wrapper">
          <div className="leftArticle">
            <div className="navigation">
              {!isMobile ? (
                <div className="logo">
                  <img src={logoIMG} alt="" title="" />
                </div>
              ) : (
                <RegistorNav />
              )}
            </div>
            <div className="content">
              {!isMobile ? <Stapes /> : null}
              <div className="blackBox">
                <RegistorFrom submitRegistration={this.submitRegistration} />
                {/* <RegistorFrom />
                <Authentication />
                <Registration /> */}
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="rightArticle">
              <img src={splashIMG} alt="" title="" />
            </div>
          ) : null}
        </div>
      </SigninContainer>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  signUp: makeSelectSignUp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signUp', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(SignUp));
