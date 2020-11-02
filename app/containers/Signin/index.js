/* eslint-disable no-nested-ternary */
/**
 *
 * Signin
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';
import injectReducer from 'utils/injectReducer';
// NOTE: Material
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import history from '../../utils/history';
import BasicDetails from '../../components/BasicDetails/Loadable';
import SigninForm from '../../components/SigninForm/Loadable';
import Authentication from '../../components/Authentication/Loadable';
import RegistorNav from '../../components/RegistorNav/Loadable';
import { getFromLocalStore } from '../../services/CommonSetterGetter';

import {
  sendOtpAction,
  verifyOtpAction,
  retryOtpAction,
  profileUpdateAction,
} from './actions';
import reducer from './reducer';
import makeSelectSignin from './selectors';

// NOTE: Styles
import { SigninContainer } from './style';
import splashIMG from '../../images/splash.png';
import logoIMG from '../../images/logo.png';
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
      store: getFromLocalStore([
        'rollNumber',
        'fName',
        'lName',
        'phone',
        'profileImage',
        'aadharNumber',
        'pincode',
        'age',
        'city',
        'dependants',
        'dob',
        'email',
        'gender',
        'locality',
        'martialstatus',
        'monthertounge',
        'occupation',
        'state',
      ]),
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
      const { request_id: requestId } = data || {};
      if (success && requestId) {
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
      const { success, isLogIn, message, data } = payloaddata || {};
      const { fName, lName } = data || {};
      if (success) {
        if (isLogIn && fName && lName) {
          history.push('/home');
        } else {
          this.setState({
            stage: 'SIGNUP',
            // error: true,
            // errorMsg: message,
          });
        }
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
    const objparams = {
      number: `91${number}`,
      retryCall: true,
    };
    this.props.dispatch(retryOtpAction(objparams));
  };

  submitRegistration = values => {
    window.console.log('values', values);
    const localData = getFromLocalStore([
      'profileImage',
      'rollNumber',
      'fName',
      'lName',
      'phone',
      'pincode',
      'age',
      'city',
      'dependants',
      'dob',
      'email',
      'gender',
      'locality',
      'martialstatus',
      'monthertounge',
      'occupation',
      'state',
      'id',
    ]);
    const jsonObj = {
      ...localData,
      _id: localData.id,
    };
    this.props.dispatch(profileUpdateAction(jsonObj)).then(() => {
      history.push('/home');
    });
  };

  // submitRegistration = values => {
  //   window.console.log('values', values);
  //   const { fName, lName, phone, pincode } = values || {};
  //   setLoclStoreArry([{ fName }, { lName }, { phone }, { pincode }]);
  //   const id = window.localStorage.getItem('id');
  //   const jsonObj = {
  //     ...values,
  //     _id: id,
  //   };
  //   this.props.dispatch(profileUpdateAction(jsonObj)).then(() => {
  //     history.push('/home');
  //   });
  // };

  render() {
    const { isMobile } = this.props;
    const { stage, error, errorMsg, store } = this.state;
    // window.console.log('STATE', this.state);
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
                  <Authentication
                    submitFun={this.submitOtp}
                    resendOtp={this.resendOtp}
                    error={{ error, errorMsg }}
                  />
                ) : ['SIGNUP'].includes(stage) ? (
                  <BasicDetails
                    formData={store}
                    // uploadAction={this.uploadActionFn}
                    submitRegistration={this.submitRegistration}
                  />
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
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
              className="dialogWrapper"
            >
              <DialogContent className="sumanta">
                <Authentication
                  submitFun={this.submitOtp}
                  resendOtp={this.resendOtp}
                  error={{ error, errorMsg }}
                />
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

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signin', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Signin));
