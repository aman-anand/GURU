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
      otp: '',
      error: false,
    };
  }

  mobileInputChange = mobile => {
    this.setState(prevState => ({
      otp: prevState.otp + mobile,
      error: prevState.length !== 4,
    }));
  };

  onEnterClickMobile = evt => {
    if (evt.key === 'Enter' || evt.charCode === 13 || evt.keyCode === 13) {
      this.setState({
        otp: evt.target.value,
      });
    }
  };

  submitOTP = () => {
    const { otp } = this.state;
    const { submitFun } = this.props;
    if (otp && otp.length === 4) {
      submitFun({ otp });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <AuthenticationContainer>
        <h4 className="_hText">Authentication Code</h4>
        <span className="_decText">Verifying your mobile number</span>
        <div className="_wrapper">
          <div className="otpWrapper">
            {[1, 2, 3, 4].map(ele => (
              <input
                type="tel"
                name={`otp_${ele}`}
                onChange={e => {
                  this.mobileInputChange(e.target.value);
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
          {error ? <span className="error">Please enter OTP</span> : null}
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
