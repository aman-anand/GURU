/**
 *
 * SigninForm
 *
 */

import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { SigninFormContainer } from './style';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo: '',
      mobileValidState: false,
      required: false,
    };
    this.submitAction = this.submitAction.bind(this);
  }

  mobileInputChange = mobile => {
    let mobile1 = mobile.replace(/[^\d]/g, '');
    const len = mobile1.length;
    if (len < 10) {
      this.setState({
        mobileValidState: false,
        mobileNo: mobile1,
      });
      return;
    }
    if (len > 10) {
      mobile1 = mobile1.slice(0, 10);
    }
    this.setState({
      mobileValidState: true,
      error: false,
      mobileNo: mobile1,
    });
  };

  onEnterClickMobile = evt => {
    if (evt.key === 'Enter' || evt.charCode === 13 || evt.keyCode === 13) {
      if (this.state.mobileValidState) {
        this.setState({ error: false });
      } else {
        this.setState({
          error: true,
          mobileErrorMessage: 'Please enter valid mobile number',
        });
      }
    }
  };

  submitAction = () => {
    const { submitFun, store } = this.props;
    const { number } = store || {};
    const { mobileNo, error, mobileValidState } = this.state;
    if (!error && (mobileValidState || number)) {
      submitFun({ number: mobileNo || number });
    } else {
      this.setState({
        error: true,
        mobileErrorMessage: 'Please enter valid mobile number',
      });
    }
  };

  render() {
    const { mobileNo, mobileErrorMessage, error, required } = this.state;
    const { store } = this.props;
    const { number } = store || {};
    return (
      <SigninFormContainer>
        <h4 className="_hText">ACCESS YOUR ACCOUNT</h4>
        <span className="_decText">Start learning marketing courses</span>
        <div className="_wrapper">
          <input
            type="number"
            value={mobileNo || number}
            placeholder="Enter Your Mobile Number"
            name="mobile"
            onChange={e => {
              this.mobileInputChange(e.target.value);
            }}
            onKeyPress={this.onEnterClickMobile}
            className={error ? 'input_error' : null}
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required={required}
          />
          {error ? <span className="error">{mobileErrorMessage}</span> : null}
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={this.submitAction}
            onKeyPress={this.submitAction}
          >
            SUBMIT
          </Button>
        </div>
      </SigninFormContainer>
    );
  }
}

SigninForm.propTypes = {
  submitFun: PropTypes.func,
  store: PropTypes.object,
};

export default memo(SigninForm);
