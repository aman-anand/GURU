/**
 *
 * Sessions
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSessions from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class Sessions extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Sessions</title>
          <meta name="description" content="Description of Sessions" />
        </Helmet>
      </div>
    );
  }
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

const withReducer = injectReducer({ key: 'sessions', reducer });

export default compose(
  withReducer,
  withConnect,
)(Sessions);
