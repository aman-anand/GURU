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
import history from '../../utils/history';
import makeSelectSignUp from './selectors';
import reducer from './reducer';
import { signupAction, sendOtpAction, verifyOtpAction, uipdateAction } from '../Signin/actions';

import RegistorNav from '../../components/RegistorNav/Loadable';
import RegistorFrom from '../../components/RegistorFrom/Loadable';
import Stapes from '../../components/Stapes/Loadable';
import Authentication from '../../components/Authentication/Loadable';
import Registration from '../../components/Registration/Loadable';

import { SigninContainer } from '../Signin/style';
import splashIMG from '../../images/splash.png';
import logoIMG from '../../images/logo.svg';

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formData: null,
      stage: 'SIGNUP',
    };
  }

  submitRegistration = values => {
    const { phone } = values || {};
    window.console.log('values', values);
    this.setState({
      formData: values,
    });
    if (phone) {
      this.props.dispatch(sendOtpAction({ number: `91${phone}` })).then(() => {
        this.setState({
          stage: 'OTP',
        });
      });
    }
  };

  submitOtp = paramsValues => {
    const { formData } = this.state;
    const { phone } = formData || {};
    const params = {
      number: `91${phone}`,
      ...paramsValues,
    };
    this.props.dispatch(verifyOtpAction(params)).then(res => {
      const { payload } = res;
      const { success: otpSuccess, error } = payload;
      if (otpSuccess) {
        this.props.dispatch(signupAction(formData)).then(resOBJ => {
          const { payload: resPayload } = resOBJ;
          const { success: registarSuccess } = resPayload;
          if (registarSuccess) {
            this.setState({
              stage: 'UPDATE',
            });
          }
        });
      } else {
        this.setState({
          error,
        });
      }
    });
  };

  updateDetails = params => {
    const { formData } = this.state;
    const { phone } = formData || {};
    const paramsOBJ = {
      phone,
      ...params,
    };
    this.props.dispatch(uipdateAction(paramsOBJ)).then(res => {
      const { payload } = res || {};
      const { success, message } = payload || {};
      if (success) {
        history.push('/home');
      } else {
        window.console.log(message);
      }
    });
  };

  render() {
    const { isMobile } = this.props;
    const { stage, error } = this.state;
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
                {['SIGNUP'].includes(stage) ? (
                  <RegistorFrom submitRegistration={this.submitRegistration} />
                ) : ['OTP'].includes(stage) ? (
                  <Authentication submitFun={this.submitOtp} error={error} />
                ) : ['UPDATE'].includes(stage) ? (
                  <Registration updateDetails={this.updateDetails} />
                ) : null}
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
