/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/**
 *
 * Authentication
 *
 */

import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { AuthenticationContainer } from './style';

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resendCountTimer: 30,
      showResend: false,
    };
    this.intervalId = undefined;
    this.resendOTPCounter = this.resendOTPCounter.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { error } = props || {};
    const { message, statusCode } = error || {};
    const { otp_1, otp_2, otp_3, otp_4 } = state;
    if (error && (otp_1 && otp_2 && otp_3 && otp_4)) {
      state.error = [400].includes(statusCode);
      state.errorMsg = message;
    }
    return null;
  }

  componentDidMount() {
    this.resendOTPCounter();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getCodeBoxElement = index => document.getElementById(`codeBox${index}`);

  onKeyUpEvent = (index, event) => {
    const eventCode = event.which || event.keyCode;
    if (this.getCodeBoxElement(index).value.length === 1) {
      if (index !== 4) {
        this.getCodeBoxElement(index + 1).focus();
      } else {
        this.getCodeBoxElement(index).blur();
        // Submit code
        window.console.log('submit code ');
      }
    }
    if (eventCode === 8 && index !== 1) {
      this.getCodeBoxElement(index - 1).focus();
    }
  };

  onFocusEvent = index => {
    for (let item = 1; item < index; item += 1) {
      const currentElement = this.getCodeBoxElement(item);
      if (!currentElement.value) {
        currentElement.focus();
        break;
      }
    }
  };

  mobileInputChange = target => {
    const { value, name } = target;
    let otp = value.replace(/[^\d]/g, '');
    const len = otp.length;
    if (len > 1) {
      otp = otp.slice(0, 1);
    }
    this.setState({
      [name]: otp,
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
    clearInterval(this.intervalId);
    const { otp_1, otp_2, otp_3, otp_4 } = this.state;
    if (otp_1 && otp_2 && otp_3 && otp_4) {
      const otp = otp_1 + otp_2 + otp_3 + otp_4;
      this.props.submitFun({ otp });
      this.resendOTPCounter();
    }
  };

  submitResendOTP = () => {
    clearInterval(this.intervalId);
    this.props.resendOtp();
    // this.resendOTPCounter();
  };

  resendOTPCounter = () => {
    this.intervalId = setInterval(countDown, 1000);
    const whis = this;
    function countDown() {
      whis.setState(prevState => {
        if (prevState.resendCountTimer < 1) {
          clearInterval(whis.intervalId);
          return { resendCountTimer: 30, showResend: true };
        }
        return {
          resendCountTimer: prevState.resendCountTimer - 1,
          showResend: false,
        };
      });
    }
  };

  render() {
    const {
      resendCountTimer,
      showResend,
      otp_1,
      otp_2,
      otp_3,
      otp_4,
    } = this.state;
    const presentOTP = otp_1 && otp_2 && otp_3 && otp_4;
    const { error } = this.props;
    const { error: _pError, errorMsg: _perrorMsg } = error || {};
    return (
      <AuthenticationContainer>
        <div className="lockClass">
          <svg
            width="35"
            height="47"
            viewBox="0 0 35 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.1568 18.0167H27.4167V10.1834C27.4168 4.56836 22.8483 0 17.2334 0C11.6185 0 7.05009 4.56836 7.05009 10.1833V18.0166H2.31025C1.03657 18.0166 0.000183493 19.053 0.000183493 20.3267V41.5135C0.000183493 41.5145 0 41.5155 0 41.5166C0 41.5177 0.000183493 41.5186 0.000183493 41.5197V44.6899C0.000183493 45.9636 1.03657 47 2.31025 47H32.1568C33.4305 47 34.4669 45.9636 34.4669 44.6899V20.3267C34.4669 19.053 33.4306 18.0167 32.1568 18.0167ZM8.61679 10.1833C8.61679 5.43236 12.4825 1.56661 17.2335 1.56661C21.9844 1.56661 25.8502 5.43236 25.8502 10.1833V18.0166H24.2835V10.1833C24.2835 6.29644 21.1212 3.1333 17.2335 3.1333C13.3458 3.1333 10.1835 6.29644 10.1835 10.1833V18.0166H8.61679V10.1833ZM11.7501 18.0167V10.1834C11.7501 7.1597 14.2105 4.70009 17.2334 4.70009C20.2563 4.70009 22.7167 7.15979 22.7167 10.1834V18.0167H11.7501ZM2.31025 19.5833H7.83339H10.9667H23.5H26.6333H32.1567C32.5664 19.5833 32.9001 19.917 32.9001 20.3267V40.7333H1.56688V20.3267C1.56688 19.9171 1.90056 19.5833 2.31025 19.5833ZM32.1568 45.4333H2.31025C1.90056 45.4333 1.56688 45.0996 1.56688 44.6899V42.3H32.9002V44.6899C32.9003 45.0996 32.5665 45.4333 32.1568 45.4333Z"
              fill="#2E323D"
            />
            <path
              d="M5.71283 29.5375C5.86558 29.6903 6.06616 29.767 6.26664 29.767C6.46713 29.767 6.6677 29.6903 6.82045 29.5375L7.83334 28.5246L8.84622 29.5375C8.99897 29.6903 9.19955 29.767 9.40004 29.767C9.60061 29.767 9.8011 29.6903 9.95385 29.5375C10.2602 29.2312 10.2602 28.7361 9.95385 28.4299L8.94096 27.417L9.95385 26.4041C10.2602 26.0978 10.2602 25.6028 9.95385 25.2965C9.64761 24.9902 9.15246 24.9902 8.84622 25.2965L7.83334 26.3094L6.82045 25.2965C6.51413 24.9902 6.01906 24.9902 5.71283 25.2965C5.4066 25.6028 5.4066 26.0979 5.71283 26.4041L6.72572 27.417L5.71283 28.4299C5.4066 28.7362 5.4066 29.2313 5.71283 29.5375Z"
              fill="#2E323D"
            />
            <path
              d="M11.9796 29.5375C12.1324 29.6903 12.3329 29.767 12.5334 29.767C12.734 29.767 12.9345 29.6903 13.0872 29.5375L14.1001 28.5246L15.113 29.5375C15.2658 29.6903 15.4663 29.767 15.6668 29.767C15.8674 29.767 16.0679 29.6903 16.2206 29.5375C16.5269 29.2312 16.5269 28.7361 16.2206 28.4299L15.2078 27.417L16.2206 26.4041C16.5269 26.0978 16.5269 25.6028 16.2206 25.2965C15.9143 24.9902 15.4193 24.9902 15.113 25.2965L14.1001 26.3094L13.0872 25.2965C12.7809 24.9902 12.2859 24.9902 11.9796 25.2965C11.6733 25.6028 11.6733 26.0979 11.9796 26.4041L12.9925 27.417L11.9796 28.4299C11.6734 28.7362 11.6734 29.2313 11.9796 29.5375Z"
              fill="#2E323D"
            />
            <path
              d="M18.2463 29.5375C18.3991 29.6903 18.5997 29.767 18.8002 29.767C19.0007 29.767 19.2012 29.6903 19.354 29.5375L20.3669 28.5246L21.3797 29.5375C21.5325 29.6903 21.7331 29.767 21.9336 29.767C22.1341 29.767 22.3346 29.6903 22.4874 29.5375C22.7936 29.2312 22.7936 28.7361 22.4874 28.4299L21.4745 27.417L22.4874 26.4041C22.7936 26.0978 22.7936 25.6028 22.4874 25.2965C22.181 24.9902 21.686 24.9902 21.3797 25.2965L20.3669 26.3094L19.354 25.2965C19.0476 24.9902 18.5526 24.9902 18.2463 25.2965C17.94 25.6028 17.94 26.0979 18.2463 26.4041L19.2592 27.417L18.2463 28.4299C17.94 28.7362 17.94 29.2313 18.2463 29.5375Z"
              fill="#2E323D"
            />
            <path
              d="M24.5128 29.5375C24.6656 29.6903 24.8662 29.767 25.0666 29.767C25.2672 29.767 25.4677 29.6903 25.6204 29.5375L26.6333 28.5246L27.6462 29.5375C27.799 29.6903 27.9995 29.767 28.2 29.767C28.4006 29.767 28.6011 29.6903 28.7538 29.5375C29.0602 29.2312 29.0602 28.7361 28.7538 28.4299L27.741 27.417L28.7538 26.4041C29.0602 26.0978 29.0602 25.6028 28.7538 25.2965C28.4475 24.9902 27.9525 24.9902 27.6462 25.2965L26.6333 26.3094L25.6204 25.2965C25.3142 24.9902 24.8191 24.9902 24.5128 25.2965C24.2065 25.6028 24.2065 26.0979 24.5128 26.4041L25.5257 27.417L24.5128 28.4299C24.2066 28.7362 24.2066 29.2313 24.5128 29.5375Z"
              fill="#2E323D"
            />
            <path
              d="M5.4834 34.4669C5.4834 34.8993 5.83351 35.2502 6.2667 35.2502H28.2C28.6332 35.2502 28.9833 34.8993 28.9833 34.4669C28.9833 34.0345 28.6332 33.6836 28.2 33.6836H6.2667C5.8336 33.6835 5.4834 34.0344 5.4834 34.4669Z"
              fill="#2E323D"
            />
          </svg>
        </div>
        <h4 className="_hText">Authentication Code</h4>
        <span className="_decText">Verifying your mobile number</span>
        <div className="_wrapper">
          <div className="otpWrapper">
            {[1, 2, 3, 4].map(ele => (
              <input
                id={`codeBox${ele}`}
                key={ele}
                type="tel"
                name={`otp_${ele}`}
                value={this.state[`otp_${ele}`]}
                onChange={e => {
                  this.mobileInputChange(e.target);
                }}
                onKeyUp={event => this.onKeyUpEvent(ele, event)}
                onFocus={() => this.onFocusEvent(ele)}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={ele === 1 ? 'autofocus' : false}
                minLength="1"
                maxLength="1"
                tabIndex={ele}
              />
            ))}
          </div>
          {_pError ? <span className="error">{_perrorMsg}</span> : null}
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={this.submitOTP}
            onKeyDown={this.submitOTP}
            disabled={!presentOTP}
          >
            PROCEED
          </Button>
          {!showResend ? (
            <span className="donthavetext">
              Resend Code {resendCountTimer}
              :00
            </span>
          ) : (
            <span
              className="donthavetext"
              onClick={this.submitResendOTP}
              role="presentation"
            >
              Resend OTP
            </span>
          )}
        </div>
      </AuthenticationContainer>
    );
  }
}

Authentication.propTypes = {
  submitFun: PropTypes.func,
  resendOtp: PropTypes.func,
  error: PropTypes.object,
};

export default memo(Authentication);
