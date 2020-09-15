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
    this.state = {};
  }

  mobileInputChange = mobile => {
    let otp = mobile.replace(/[^\d]/g, '');
    const len = otp.length;
    if (len < 5) {
      this.setState({
        otp,
      });
      return;
    }
    if (len > 5) {
      otp = otp.slice(0, 4);
    }
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
    }
  };

  render() {
    return (
      <AuthenticationContainer>
        <h4 className="_hText">Authentication Code</h4>
        <span className="_decText">Verifying your mobile number</span>
        <div className="_wrapper">
          <div className="otpWrapper">
            <input
              type="tel"
              value={this.state.otp}
              name="otp"
              onChange={e => {
                this.mobileInputChange(e.target.value);
              }}
              onKeyPress={this.onEnterClickMobile}
            />
          </div>
          <Button variant="contained" color="primary" type="button" onClick={this.submitOTP}>
            PROCEED
          </Button>
          <span className="donthavetext">Resend Code 00:30</span>
        </div>
      </AuthenticationContainer>
    );
  }
}

Authentication.propTypes = {
  submitFun: PropTypes.func,
};

export default Authentication;
