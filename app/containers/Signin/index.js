/* eslint-disable react/no-unused-prop-types */
/**
 *
 * Signin
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
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import reducer from './reducer';
import makeSelectSignin from './selectors';
import history from '../../utils/history';
import SigninForm from '../../components/SigninForm/Loadable';
import Authentication from '../../components/Authentication/Loadable';
import RegistorNav from '../../components/RegistorNav/Loadable';
import { SigninContainer } from './style';
import splashIMG from '../../images/splash.png';
import logoIMG from '../../images/logo.svg';
// import { getFromLocalStore } from '../../services/CommonSetterGetter';
import { sendOtpAction, verifyOtpAction, retryOtpAction, loginAction } from './actions';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
/* eslint-disable react/prefer-stateless-function */
export class Signin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      stage: 'LOGIN',
      // store: getFromLocalStore(['phone']),
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, stage: 'LOGIN' });
  };

  submitMobile = params => {
    const { isMobile } = this.props;
    const { number } = params || {};
    this.setState({
      store: { ...params },
    });
    const paramsJSON = { number: `91${number}` };
    this.props.dispatch(sendOtpAction(paramsJSON)).then(res => {
      const { payload } = res || {};
      const { data, success } = payload || {};
      const { request_id } = data || {};
      if (success && request_id) {
        this.setState({
          stage: 'OTP',
        });
        if (isMobile) {
          this.setState({
            open: true,
          });
        }
        if (!isMobile) {
          this.setState({
            open: true,
          });
        }
      }
    });
  };

  submitOtp = params => {
    const { store } = this.state;
    const { number } = store || {};
    const jsonOBJ = {
      ...params,
      number: `91${number}`,
    };
    this.props.dispatch(verifyOtpAction(jsonOBJ)).then(otpres => {
      const { payload: payloaddata } = otpres || {};
      const { success, message } = payloaddata || {};
      if (success) {
        const paramsJSON = { phone: number };
        this.props.dispatch(loginAction(paramsJSON)).then(res => {
          const { payload } = res || {};
          const { data } = payload || {};
          const { auth, role } = data || {};
          const { token } = auth || {};
          if (token && role) {
            history.push('/home');
          }
        });
      } else {
        this.setState({
          error: true,
          errorMsg: message,
        });
      }
    });
  };

  resendOtp = () => {
    const { store } = this.state;
    const { number } = store || {};
    const _obj = {
      number: `91${number}`,
      retryCall: true,
    };
    this.props.dispatch(retryOtpAction(_obj));
  };

  render() {
    const { isMobile } = this.props;
    const { stage, error, errorMsg, store } = this.state;
    return (
      <SigninContainer>
        <Helmet>
          <title>Signin</title>
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
              <div className="blackBox">
                {['LOGIN'].includes(stage) ? (
                  <SigninForm submitFun={this.submitMobile} store={store} />
                ) : ['OTP'].includes(stage) && !isMobile ? (
                  <Authentication submitFun={this.submitOtp} resendOtp={this.resendOtp} error={{ error, errorMsg }} />
                ) : null}
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="rightArticle">
              <img src={splashIMG} alt="" title="" />
            </div>
          ) : null}
          {isMobile && ['OTP'].includes(stage) ? (
            <Dialog
              open={this.state.open}
              TransitionComponent={Transition}
              keepMounted
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
              className="dialogWrapper"
            >
              <DialogContent className="sumanta">
                <Authentication submitFun={this.submitOtp} resendOtp={this.resendOtp} error={{ error, errorMsg }} />
              </DialogContent>
            </Dialog>
          ) : null}
        </div>
      </SigninContainer>
    );
  }
}

Signin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignin(),
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

const withReducer = injectReducer({ key: 'signin', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(Signin));
