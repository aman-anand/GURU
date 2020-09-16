/**
 *
 * Registration
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import withSizes from 'react-sizes';
import PropTypes from 'prop-types';
import { RegistrationContainer } from './style';
// import styled from 'styled-components';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMobile, formData } = this.props;
    const { aadharNumber } = formData || {};
    return (
      <RegistrationContainer>
        <h4 className="_hText">PENDING DETAILS</h4>
        <span className="_decText">Start learning marketing courses</span>
        <div className="_wrapper">
          {isMobile ? (
            <div className="profilePic">
              <i className="_proPic">
                <img alt="" title="" />
              </i>
            </div>
          ) : null}
          <input type="text" placeholder="Referral Code" />
          <div className="genderWrapper">
            <span>Gender</span>
            <div className="_genderBox">
              <label htmlFor="male">
                <input type="radio" name="gender" value="male" id="male" />
                <span>Male</span>
              </label>
              <label htmlFor="female">
                <input type="radio" name="gender" value="female" id="female" />
                <span>Female</span>
              </label>
            </div>
          </div>
          <div className="_twoComumnWrapper">
            <input type="text" placeholder="Date of Birth *" />
            <input type="text" placeholder="Age *" />
            <input type="text" placeholder="Martial Status * *" />
          </div>
          <div className="_twoComumnWrapper">
            <input type="text" placeholder="Date of Birth *" />
            <input type="text" placeholder="Age *" />
            <input type="text" placeholder="Martial Status * *" />
          </div>
          <div className={`${isMobile ? '_twoRowWrapper' : '_twoComumnWrapper'}`}>
            <input type="text" placeholder="Email Address *" />
            <input type="text" placeholder="Phone Number *" />
          </div>
          <input type="text" placeholder="Aadhar Card Number *" value={aadharNumber} />
          <input type="text" placeholder="Password *" />
          <Button variant="contained" color="primary" type="button">
            PROCEED
          </Button>
        </div>
      </RegistrationContainer>
    );
  }
}

Registration.propTypes = {
  isMobile: PropTypes.bool,
  formData: PropTypes.object,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default withSizes(mapSizesToProps)(Registration);
