/**
 *
 * Sessions
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSessions from './selectors';
import reducer from './reducer';

export function Sessions() {
  useInjectReducer({ key: 'sessions', reducer });

  return (
    <div>
      <Helmet>
        <title>Sessions</title>
        <meta name="description" content="Description of Sessions" />
      </Helmet>
    </div>
  );
}

Sessions.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sessions: makeSelectSessions(),
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
)(Sessions);
