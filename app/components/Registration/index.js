/**
 *
 * Registration
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import withSizes from 'react-sizes';
import PropTypes from 'prop-types';
import uploadIcon from '../../images/uploadIcon.svg';
import cameraIcon from '../../images/cameraIcon.svg';
import { RegistrationContainer } from './style';
// import styled from 'styled-components';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      formObj: {},
    };
  }

  onChangeAction = e => {
    const { value, name } = e.target;
    const { formObj } = this.state;
    const obj = { [name]: value };
    this.setState({
      formObj: Object.assign(formObj, obj),
    });
  };

  onEnterClick = evt => {
    const { value, name } = evt.target;
    if (evt.key === 'Enter' || evt.charCode === 13 || evt.keyCode === 13) {
      this.setState({
        [name]: value,
      });
    }
  };

  onSubmitForm = () => {
    const { updateDetails } = this.props;
    const { formObj } = this.state;
    const { dob, age, martialstatus, occupation, monthertounge } = formObj || {};
    if (dob && age && martialstatus && occupation && monthertounge) {
      updateDetails(formObj);
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    const { error, formObj } = this.state;
    const { eferral, dob, age, martialstatus, occupation, monthertounge, dependants, locality, district, state, pincode } = formObj || {};
    const { isMobile } = this.props;
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
          <input type="text" name="eferral" value={eferral} placeholder="Referral Code" onChange={e => this.onChangeAction(e)} />
          <div className="genderWrapper">
            <span>Gender</span>
            <div className="_genderBox" onChange={e => this.onChangeAction(e)}>
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
            <input
              type="date"
              name="dob"
              value={dob}
              placeholder="Date of Birth *"
              onChange={e => this.onChangeAction(e)}
              className={`${error && !dob ? 'input_error' : null}`}
            />
            <input
              type="number"
              name="age"
              value={age}
              maxLength="2"
              size="2"
              placeholder="Age *"
              onChange={e => this.onChangeAction(e)}
              className={`${error && !age ? 'input_error' : null}`}
            />
            <input
              type="text"
              name="martialstatus"
              value={martialstatus}
              placeholder="Martial Status *"
              onChange={e => this.onChangeAction(e)}
              className={`${error && !martialstatus ? 'input_error' : null}`}
            />
          </div>
          <div className="_twoComumnWrapper">
            <select
              name="occupation"
              value={occupation}
              onChange={e => this.onChangeAction(e)}
              className={`${error && !occupation ? 'select_error' : null}`}
            >
              <option>Occupation *</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            <select
              name="monthertounge"
              value={monthertounge}
              onChange={e => this.onChangeAction(e)}
              className={`${error && !monthertounge ? 'select_error' : null}`}
            >
              <option>Mother Tongue *</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <select name="dependants" value={dependants} onChange={e => this.onChangeAction(e)}>
              <option>No. of Dependants *</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="_twoComumnWrapper">
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
          </div>
          <p className="_secText">Address</p>
          <input type="text" value={locality} name="locality" placeholder="Locality/Post Office" onChange={e => this.onChangeAction(e)} />
          <div className="_twoComumnWrapper">
            <select name="district" value={district} onChange={e => this.onChangeAction(e)}>
              <option>City/District/Region</option>
              <option value="mumbai">Mumbai</option>
              <option value="thane">Thane</option>
              <option value="pune">Pune</option>
            </select>
            <select name="state" value={state} onChange={e => this.onChangeAction(e)}>
              <option>state</option>
              <option value="maharastra">Maharastra</option>
              <option value="kolkata">Kolkata</option>
              <option value="delhi">Delhi</option>
            </select>
            <input type="number" name="pincode" value={pincode} min="6" max="6" placeholder="Pin code" onChange={e => this.onChangeAction(e)} />
          </div>
          <Button variant="contained" color="primary" type="button" onClick={this.onSubmitForm}>
            PROCEED
          </Button>
        </div>
      </RegistrationContainer>
    );
  }
}

Registration.propTypes = {
  isMobile: PropTypes.bool,
  updateDetails: PropTypes.func,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default withSizes(mapSizesToProps)(Registration);
