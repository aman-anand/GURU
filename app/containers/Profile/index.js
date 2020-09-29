/**
 *
 * Profile
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
export function Profile() {
  useInjectReducer({ key: 'profile', reducer });

  return (
    <div>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Description of Profile" />
      </Helmet>
      <Header title="PROFILE" />
      <div>Profile Settings</div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Profile);
