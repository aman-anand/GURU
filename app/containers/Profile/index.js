/* eslint-disable no-console */
/**
 *
 * Profile
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import injectReducer from 'utils/injectReducer';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import { uploadAction, profileUpdateAction } from './actions';
import {
  getFromLocalStore,
  setLoclStoreArry,
  language,
} from '../../services/CommonSetterGetter';
import Header from '../../components/Header/Loadable';
import BasicDetails from '../../components/BasicDetails/Loadable';
import Registration from '../../components/Registration/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
// NOTE: Style
import { ProfileContainer } from './style';
export class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabs: 'basicinfo',
      store: getFromLocalStore([
        'rollNumber',
        'fName',
        'lName',
        'phone',
        'profileImage',
        'aadharNumber',
        'pincode',
        'age',
        'city',
        'dependants',
        'dob',
        'email',
        'gender',
        'locality',
        'martialstatus',
        'monthertounge',
        'occupation',
        'state',
      ]),
    };
  }

  tabChange = params => {
    this.setState({
      selectedTabs: params,
    });
  };

  uploadActionFn = (name, file) => {
    const formData = new FormData();
    formData.append('uploads', file);
    this.props.dispatch(uploadAction(formData)).then(res => {
      const { payload } = res || {};
      const { data } = payload || {};
      this.setState({
        [name]: data[0],
      });
      window.localStorage.setItem(name, data[0]);
    });
  };

  submitRegistration = values => {
    window.console.log('values', values);
    const {
      profileImage,
      fName,
      lName,
      phone,
      pincode,
      age,
      city,
      dependants,
      dob,
      email,
      gender,
      locality,
      martialstatus,
      monthertounge,
      occupation,
      state,
    } = values || {};
    setLoclStoreArry([
      { profileImage },
      { fName },
      { lName },
      { phone },
      { pincode },
      { age },
      { city },
      { dependants },
      { dob },
      { email },
      { gender },
      { locality },
      { martialstatus },
      { monthertounge },
      { occupation },
      { state },
    ]);
    const id = window.localStorage.getItem('id');
    const jsonObj = {
      ...values,
      _id: id,
    };
    this.props.dispatch(profileUpdateAction(jsonObj));
  };

  render() {
    const { isMobile } = this.props || {};
    const { store, profileImage } = this.state;
    const { rollNumber } = store || {};
    console.log('STORE', store, rollNumber);
    return (
      <ProfileContainer>
        <Helmet>
          <title>Profile</title>
          <meta name="description" content="Description of Profile" />
        </Helmet>
        {!isMobile ? (
          <Header title="MY PROFILE" />
        ) : (
          <OptionalHeader title="MY PROFILE" goTo="/home" />
        )}
        <div className="profileContainer">
          <div className="tabsWraper">
            <div
              className={`${
                ['basicinfo'].includes(this.state.selectedTabs)
                  ? 'tab active'
                  : 'tab'
              }`}
              onClick={() => this.tabChange('basicinfo')}
              role="presentation"
            >
              <span>{language().txt_basic_info}</span>
            </div>
            <div
              className={`${
                ['moreinfo'].includes(this.state.selectedTabs)
                  ? 'tab active'
                  : 'tab'
              }`}
              onClick={() => this.tabChange('moreinfo')}
              role="presentation"
            >
              <span>{language().txt_more_info}</span>
            </div>
          </div>
          <div className="tabContent">
            <div className="basicDetailsForm">
              {['basicinfo'].includes(this.state.selectedTabs) ? (
                <BasicDetails
                  formData={store}
                  profileImage={profileImage}
                  // uploadAction={this.uploadActionFn}
                  submitRegistration={this.submitRegistration}
                />
              ) : null}
              {['moreinfo'].includes(this.state.selectedTabs) ? (
                <Registration
                  formData={store}
                  submitRegistration={this.submitRegistration}
                />
              ) : null}
            </div>
          </div>
        </div>
      </ProfileContainer>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const withReducer = injectReducer({ key: 'profile', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Profile));
