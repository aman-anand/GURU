/**
 *
 * RegistorFrom
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { RegistorFromContainer } from './style';

/* eslint-disable react/prefer-stateless-function */
class RegistorFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      required: false,
    };
  }

  onChangeAction = eve => {
    const { name, value } = eve.target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    const { submitRegistration } = this.props;
    const { fName, lName, email, phone, aadharNumber, required } = this.state || {};
    if (!required && !(fName && lName && email && phone && aadharNumber)) {
      this.setState({
        required: true,
      });
    } else {
      submitRegistration({ fName, lName, email, phone, aadharNumber });
    }
  };

  render() {
    const { isMobile, responseError, formData } = this.props;
    const { required, fName, lName, email, phone, aadharNumber } = this.state;
    const { message, success } = responseError || {};
    const { fName: props_fname, lName: props_lName, email: props_email, phone: props_phone, aadharNumber: props_aadh } = formData || {};
    console.log('STATE', this.state);
    return (
      <RegistorFromContainer>
        <h4 className="_hText">Create AN Account</h4>
        <span className="_decText">Start learning marketing courses</span>
        <div className="_wrapper">
          {/* {isMobile ? (
            <div className="profilePic">
              <i className="_proPic">
                <img alt="" title="" />
              </i>
            </div>
          ) : null} */}
          <div className="_twoComumnWrapper">
            <input
              name="fName"
              type="text"
              value={fName || props_fname}
              placeholder="First name *"
              onChange={e => this.onChangeAction(e)}
              required={required}
            />
            <input
              name="lName"
              type="text"
              value={lName || props_lName}
              placeholder="Last name *"
              onChange={e => this.onChangeAction(e)}
              required={required}
            />
          </div>
          <div className={`${isMobile ? '_twoRowWrapper' : '_twoComumnWrapper'}`}>
            <input
              name="email"
              type="text"
              value={email || props_email}
              placeholder="Email Address *"
              onChange={e => this.onChangeAction(e)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required={required}
            />
            <input
              name="phone"
              type="tel"
              value={phone || props_phone}
              placeholder="Phone Number *"
              onChange={e => this.onChangeAction(e)}
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required={required}
            />
          </div>
          <input
            name="aadharNumber"
            type="text"
            value={aadharNumber || props_aadh}
            placeholder="Aadhar Card Number *"
            onChange={e => this.onChangeAction(e)}
            pattern="[0-9]{4}[0-9]{4}[0-9]{4}"
            required={required}
          />
          {!success ? <span className="error">{message}</span> : null}
          <Button variant="contained" color="primary" type="button" onClick={this.submitForm}>
            PROCEED
          </Button>
          <span className="donthavetext">
            <Link to="/signin">{isMobile ? 'Already have an account?' : 'BACK TO LOGIN'}</Link>
          </span>
        </div>
      </RegistorFromContainer>
    );
  }
}

RegistorFrom.propTypes = {
  isMobile: PropTypes.bool,
  submitRegistration: PropTypes.func,
  responseError: PropTypes.object,
  formData: PropTypes.object,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default withSizes(mapSizesToProps)(RegistorFrom);
