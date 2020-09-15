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
import uploadIcon from '../../images/uploadIcon.svg';
import cameraIcon from '../../images/cameraIcon.svg';
import { RegistorFromContainer } from './style';

/* eslint-disable react/prefer-stateless-function */
class RegistorFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formObj: {},
    };
  }

  onChangeAction = eve => {
    const { name, value } = eve.target;
    this.setState({
      formObj: {
        [name]: {
          value,
        },
      },
      error: false,
    });
  };

  submitForm = () => {
    const { formObj } = this.state;
    const { submitRegistration } = this.props;
    const { fName, lName, email, phone, aadharNumber, password } = formObj || {};
    if (!(fName && lName && email && phone && aadharNumber && password)) {
      this.setState({
        error: true,
      });
    } else {
      submitRegistration({ fName, lName, email, phone, aadharNumber, password });
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
          {isMobile ? (
            <div className="profilePic">
              <i className="_proPic">
                <img alt="" title="" />
              </i>
            </div>
          ) : null}
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
            <input name="email" type="text" placeholder="Email Address *" />
            <input name="phone" type="tel" placeholder="Phone Number *" />
          </div>
          <input name="aadharNumber" type="tel" placeholder="Aadhar Card Number *" />
          <div className="uploadField">
            <label htmlFor="fileupload">
              <input name="aadharImageUrl" type="file" id="fileupload" />
              <div className="_leftUpload">
                <img src={uploadIcon} alt="" title="" />
              </div>
              <div className="_rightUpload">
                <span className="uploadText">
                  <i>
                    <img src={cameraIcon} alt="" title="" />
                  </i>
                  Upload
                </span>
                <span> Aadhar Card</span>
              </div>
            </label>
          </div>
          <input name="password" type="text" placeholder="Password *" />
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
