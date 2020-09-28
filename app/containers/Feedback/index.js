/**
 *
 * Feedback
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFeedback from './selectors';
import reducer from './reducer';

export function Feedback() {
  useInjectReducer({ key: 'feedback', reducer });

  return (
    <div>
      <Helmet>
        <title>Feedback</title>
        <meta name="description" content="Description of Feedback" />
      </Helmet>
      <div>Feedback from</div>
    </div>
  );
}

Feedback.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  feedback: makeSelectFeedback(),
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
)(Feedback);
