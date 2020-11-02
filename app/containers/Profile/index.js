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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import injectReducer from 'utils/injectReducer';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import { uploadAction, profileUpdateAction } from './actions';
import {
  getFromLocalStore,
  languageString,
} from '../../services/CommonSetterGetter';
import Header from '../../components/Header/Loadable';
import BasicDetails from '../../components/BasicDetails/Loadable';
import Registration from '../../components/Registration/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
// NOTE: Style
import { ProfileContainer } from './style';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabs: 'basicinfo',
      store: getFromLocalStore([
        'profileImage',
        'rollNumber',
        'fName',
        'lName',
        'phone',
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
      snake: false,
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
    // window.console.log('values', values);
    const localData = getFromLocalStore([
      'profileImage',
      'rollNumber',
      'fName',
      'lName',
      'phone',
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
      'id',
    ]);
    const { city, pincode, locality, state } = localData || {};

    // console.log('localData', localData);
    const jsonObj = {
      ...localData,
      address: { city, pincode, locality, state },
      _id: localData.id,
    };
    this.props.dispatch(profileUpdateAction(jsonObj)).then(res => {
      const { payload } = res || {};
      const { success } = payload || {};
      if (success) {
        this.setState({
          snake: true,
        });
      }
    });
  };

  handleClose = () => {
    this.setState({
      snake: false,
    });
  };

  render() {
    const { isMobile } = this.props || {};
    const { store, profileImage } = this.state;
    const { rollNumber } = store || {};
    // console.log('STORE', store, rollNumber);
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
              <span>{languageString('txt_basic_info')}</span>
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
              <span>{languageString('txt_more_info')}</span>
            </div>
          </div>
          <div className="tabContent">
            <div className="basicDetailsForm">
              {['basicinfo'].includes(this.state.selectedTabs) ? (
                <BasicDetails
                  formData={store}
                  proImg
                  profileImage={profileImage}
                  uploadAction={this.uploadActionFn}
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
        <Snackbar
          open={this.state.snake}
          autoHideDuration={2000}
          onClose={this.handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={this.handleClose}
            severity="success"
            className="successAlert"
          >
            Profile Update successfully
          </Alert>
        </Snackbar>
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
