/* eslint-disable camelcase */
/**
 *
 * Registration
 *
 */

import React, { Fragment, memo } from 'react';
import Button from '@material-ui/core/Button';
import withSizes from 'react-sizes';
import PropTypes from 'prop-types';
import { RegistrationContainer } from './style';
// import uploadIcon from '../../images/uploadIcon.svg';
// import cameraIcon from '../../images/cameraIcon.svg';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formObj: {},
    };
  }

  componentDidMount() {
    const { formData } = this.props;
    const {
      dob,
      age,
      martialstatus,
      occupation,
      monthertounge,
      dependants,
      locality,
      city,
      state,
      gender,
      email,
    } = formData || {};
    this.setState({
      formObj: {
        dob,
        age,
        martialstatus,
        occupation,
        monthertounge,
        dependants,
        locality,
        city,
        state,
        gender,
        email,
      },
    });
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
    const { submitRegistration } = this.props;
    const { formObj } = this.state;
    submitRegistration(formObj);
  };

  render() {
    const { formObj } = this.state;
    const { isMobile } = this.props;
    const {
      dob,
      age,
      martialstatus,
      occupation,
      monthertounge,
      dependants,
      locality,
      city,
      state,
      gender,
      email,
    } = formObj || {};
    return (
      <RegistrationContainer>
        {!isMobile ? (
          <Fragment>
            <h4 className="_hText">ADDITIONAL INFORMATION UPDATES</h4>
            <span className="_decText">Start learning marketing courses</span>
          </Fragment>
        ) : null}
        <div className="_wrapper">
          <div className="genderWrapper">
            <span>Gender</span>
            <div className="_genderBox" onChange={e => this.onChangeAction(e)}>
              <label htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  checked={gender === 'male'}
                />
                <span>Male</span>
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  checked={gender === 'female'}
                />
                <span>Female</span>
              </label>
            </div>
          </div>
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Email Address"
            onChange={e => this.onChangeAction(e)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <div className="_rowWrapper">
            <select
              name="occupation"
              value={occupation}
              onChange={e => this.onChangeAction(e)}
            >
              <option>Occupation</option>
              <option value="farmer">Farmer</option>
              <option value="accountant">Accountant</option>
              <option value="driver">Driver</option>
            </select>
          </div>
          <div className="_twoComumnWrapper">
            <input
              type="date"
              name="dob"
              value={dob}
              placeholder="Date of Birth"
              onChange={e => this.onChangeAction(e)}
            />
            <input
              type="number"
              name="age"
              value={age}
              maxLength="2"
              size="2"
              placeholder="Age *"
              onChange={e => this.onChangeAction(e)}
            />
          </div>
          <div className="_rowWrapper">
            <select
              name="monthertounge"
              value={monthertounge}
              onChange={e => this.onChangeAction(e)}
            >
              <option>Mother Tongue</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="gujurati">Gujurati</option>
              <option value="marathi">Marathi</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="_twoComumnWrapper">
            <select
              name="martialstatus"
              value={martialstatus}
              onChange={e => this.onChangeAction(e)}
            >
              <option>Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
            <select
              name="dependants"
              value={dependants}
              onChange={e => this.onChangeAction(e)}
            >
              <option>No. of Dependants</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <p className="_secText">Address</p>
          <input
            type="text"
            value={locality}
            name="locality"
            placeholder="Locality/Post Office"
            onChange={e => this.onChangeAction(e)}
          />
          <div className="_twoComumnWrapper">
            <input
              type="text"
              value={city}
              name="city"
              placeholder="City/District/Region"
              onChange={e => this.onChangeAction(e)}
            />
            <input
              type="text"
              value={state}
              name="state"
              placeholder="State"
              onChange={e => this.onChangeAction(e)}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={this.onSubmitForm}
          >
            SAVE DETAILS
          </Button>
        </div>
      </RegistrationContainer>
    );
  }
}

Registration.propTypes = {
  isMobile: PropTypes.bool,
  submitRegistration: PropTypes.func,
  formData: PropTypes.object,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(Registration));
