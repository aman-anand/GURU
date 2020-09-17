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
    this.state = {};
  }

  onChangeAction = eve => {
    const { name, value } = eve.target;
    this.setState({
      [name]: value,
      error: false,
    });
  };

  submitForm = () => {
    const { submitRegistration } = this.props;
    const { fName, lName, email, phone, aadharNumber } = this.state || {};
    // if (!(fName && lName && email && phone && aadharNumber && password)) {
    if (!phone) {
      this.setState({
        error: true,
      });
    } else {
      submitRegistration({ fName, lName, email, phone, aadharNumber });
    }
  };

  render() {
    const { isMobile } = this.props;
    const { error } = this.state;
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
              placeholder="First name *"
              onChange={e => this.onChangeAction(e)}
              className={`${error ? 'input_error' : null}`}
            />
            <input
              name="lName"
              type="text"
              placeholder="Last name *"
              onChange={e => this.onChangeAction(e)}
              className={`${error ? 'input_error' : null}`}
            />
          </div>
          <div className={`${isMobile ? '_twoRowWrapper' : '_twoComumnWrapper'}`}>
            <input
              name="email"
              type="text"
              placeholder="Email Address *"
              className={`${error ? 'input_error' : null}`}
              onChange={e => this.onChangeAction(e)}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number *"
              className={`${error ? 'input_error' : null}`}
              onChange={e => this.onChangeAction(e)}
            />
          </div>
          <input
            name="aadharNumber"
            type="tel"
            placeholder="Aadhar Card Number *"
            className={`${error ? 'input_error' : null}`}
            onChange={e => this.onChangeAction(e)}
          />
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
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default withSizes(mapSizesToProps)(RegistorFrom);
