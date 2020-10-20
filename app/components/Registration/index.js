/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/**
 *
 * Registration
 *
 */

import React, { Fragment, memo } from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import withSizes from 'react-sizes';
import PropTypes from 'prop-types';
import { RegistrationContainer } from './style';
import { language, setLoclStoreArry } from '../../services/CommonSetterGetter';
// import cameraIcon from '../../images/cameraIcon.svg';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formObj: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    state.data = {
      gender: window.localStorage.getItem('gender'),
      email: window.localStorage.getItem('email'),
      occupation: window.localStorage.getItem('occupation'),
      dob: window.localStorage.getItem('dob'),
      age: window.localStorage.getItem('age'),
      monthertounge: window.localStorage.getItem('monthertounge'),
      martialstatus: window.localStorage.getItem('martialstatus'),
      dependants: window.localStorage.getItem('dependants'),
      locality: window.localStorage.getItem('locality'),
      city: window.localStorage.getItem('city'),
      state: window.localStorage.getItem('state'),
    };
    return null;
  }

  onSubmitForm = () => {
    const { submitRegistration } = this.props;
    const { formObj } = this.state;
    submitRegistration(formObj);
  };

  onSubmit = values => {
    const {
      gender,
      email,
      occupation,
      dob,
      monthertounge,
      martialstatus,
      dependants,
      locality,
      city,
      state,
    } = values || {};
    setLoclStoreArry([
      { gender },
      { email },
      { occupation },
      { dob },
      {
        age: Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e10),
      },
      { monthertounge },
      { martialstatus },
      { dependants },
      { locality },
      { city },
      { state },
    ]);
    const { submitRegistration } = this.props;
    if (values) {
      submitRegistration();
    }
  };

  render() {
    const { isMobile } = this.props;
    const Error = ({ name }) => (
      <Field name={name} subscription={{ error: true, touched: true }}>
        {({ meta: { error, touched } }) =>
          error && touched ? <span>{error}</span> : null
        }
      </Field>
    );
    // NOTE: Validateor End
    return (
      <RegistrationContainer>
        {!isMobile ? (
          <Fragment>
            <h4 className="_hText">ADDITIONAL INFORMATION UPDATES</h4>
            <span className="_decText">Start learning marketing courses</span>
          </Fragment>
        ) : null}
        <div className="_wrapper">
          {/* NOTE: Start form */}
          <Form
            onSubmit={this.onSubmit}
            initialValues={this.state.data}
            validate={values => {
              const errors = {};
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = 'Please enter valid email';
              }
              return errors;
            }}
            render={({ handleSubmit, pristine, form, submitting, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="genderWrapper">
                  <div className="_genderBox">
                    <span>Gender</span>
                    <label htmlFor="male">
                      <Field
                        id="male"
                        name="gender"
                        component="input"
                        type="radio"
                        value="male"
                      />
                      <span>Male</span>
                    </label>
                    <label htmlFor="female">
                      <Field
                        id="female"
                        name="gender"
                        component="input"
                        type="radio"
                        value="female"
                      />
                      <span>Female</span>
                    </label>
                  </div>
                  <Error name="gender" />
                </div>
                <div className="_rowWrapper">
                  <Field name="email">
                    {({ input, meta }) => (
                      <div className="fieldWrapper">
                        <input
                          {...input}
                          type="text"
                          placeholder="Email Address"
                          className={
                            meta.error && meta.touched ? 'error' : null
                          }
                        />
                        {meta.error && meta.touched && (
                          <span className="fieldError">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="_twoRowWrapper">
                  <Field name="occupation" component="select">
                    <option>{language().txt_occupation_comp}</option>
                    {language().occupation.map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className="_twoComumnWrapper">
                  <Field name="dob">
                    {({ input, meta }) => (
                      <div className="fieldWrapper">
                        <input
                          {...input}
                          type="date"
                          placeholder="Date of Birth"
                          max={
                            new Date(
                              new Date().getTime() -
                                new Date().getTimezoneOffset() * 60000,
                            )
                              .toISOString()
                              .split('T')[0]
                          }
                          className={
                            meta.error && meta.touched ? 'DOB error' : 'DOB'
                          }
                        />
                        {meta.error && meta.touched && (
                          <span className="fieldError">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="age">
                    {({ input, meta }) => (
                      <div className="fieldWrapper">
                        <input
                          {...input}
                          type="number"
                          placeholder="age"
                          value={Math.floor(
                            (new Date() - new Date(values.dob).getTime()) /
                              3.15576e10,
                          )}
                          style={{ pointerEvents: 'none' }}
                          className={
                            meta.error && meta.touched ? 'error' : null
                          }
                        />
                        {meta.error && meta.touched && (
                          <span className="fieldError">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="_rowWrapper">
                  <Field name="monthertounge" component="select">
                    <option>Mother Tongue</option>
                    {language().mothertonge.map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className="_twoComumnWrapper">
                  <div className="fieldWrapper">
                    <Field name="martialstatus" component="select">
                      <option>Marital Status</option>
                      {language().maritalstatus.map(time => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="fieldWrapper">
                    <Field name="dependants" component="select">
                      <option>No. of Dependants</option>
                      {language().dependent.map(time => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <p className="_secText">Address</p>

                <div className="_rowWrapper">
                  <Field name="locality">
                    {({ input, meta }) => (
                      <div className="fieldWrapper">
                        <input
                          {...input}
                          type="text"
                          placeholder="Locality/Post Office"
                          className={
                            meta.error && meta.touched ? 'error' : null
                          }
                        />
                        {meta.error && meta.touched && (
                          <span className="fieldError">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>

                <div className="_twoComumnWrapper">
                  <Field name="city">
                    {({ input, meta }) => (
                      <div className="fieldWrapper">
                        <input
                          {...input}
                          type="text"
                          placeholder="city"
                          className={
                            meta.error && meta.touched ? 'error' : null
                          }
                        />
                        {meta.error && meta.touched && (
                          <span className="fieldError">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="state">
                    {({ input, meta }) => (
                      <div className="fieldWrapper">
                        <input
                          {...input}
                          type="text"
                          placeholder="state"
                          className={
                            meta.error && meta.touched ? 'error' : null
                          }
                        />
                        {meta.error && meta.touched && (
                          <span className="fieldError">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>

                <div className="buttons">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting || pristine}
                    className="updateButton"
                  >
                    {language().txt_update_info}
                  </Button>
                </div>
                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
              </form>
            )}
          />
          {/* NOTE: End form */}
        </div>
      </RegistrationContainer>
    );
  }
}

Registration.propTypes = {
  isMobile: PropTypes.bool,
  submitRegistration: PropTypes.func,
  formData: PropTypes.object,
  message: PropTypes.string,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(Registration));
