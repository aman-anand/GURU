/**
 *
 * Authentication
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { AuthenticationContainer } from './style';

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMsg: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { error } = props || {};
    const { message, statusCode } = error || {};
    const { otp_1, otp_2, otp_3, otp_4 } = state;
    if (error && (otp_1 && otp_2 && otp_3 && otp_4)) {
      state.error = [400].includes(statusCode);
      state.errorMsg = message;
    }
  }

  mobileInputChange = target => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  onEnterClickMobile = evt => {
    const { value, name } = evt.target;
    if (evt.key === 'Enter' || evt.charCode === 13 || evt.keyCode === 13) {
      this.setState({
        [name]: value,
      });
    }
  };

  submitOTP = () => {
    const { otp_1, otp_2, otp_3, otp_4 } = this.state;
    const { submitFun } = this.props;
    if (otp_1 && otp_2 && otp_3 && otp_4) {
      const OTP = otp_1 + otp_2 + otp_3 + otp_4;
      submitFun({ OTP });
    } else {
      this.setState({
        error: true,
        errorMsg: 'Please enter OTP',
      });
    }
  };

  render() {
    const { error, errorMsg } = this.state;
    // console.log('STATE', this.state);
    return (
      <AuthenticationContainer>
        <h4 className="_hText">Authentication Code</h4>
        <span className="_decText">Verifying your mobile number</span>
        <div className="_wrapper">
          <div className="otpWrapper">
            {[1, 2, 3, 4].map(ele => (
              <input
                key={ele}
                type="tel"
                name={`otp_${ele}`}
                onChange={e => {
                  this.mobileInputChange(e.target);
                }}
                onKeyPress={this.onEnterClickMobile}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={ele === 1 ? 'autofocus' : false}
                minLength="1"
                maxLength="1"
                tabIndex={ele}
              />
            ))}
          </div>
          {error ? <span className="error">{errorMsg}</span> : null}
          <Button variant="contained" color="primary" type="button" onClick={this.submitOTP}>
            PROCEED
          </Button>
          {/* <span className="donthavetext">Resend Code 00:30</span> */}
        </div>
      </AuthenticationContainer>
    );
  }
}

Authentication.propTypes = {
  submitFun: PropTypes.func,
};

export default Authentication;
