/**
 *
 * CourseDetails
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCourseDetails from './selectors';
import reducer from './reducer';

export function CourseDetails() {
  useInjectReducer({ key: 'courseDetails', reducer });

  return (
    <div>
      <Helmet>
        <title>CourseDetails</title>
        <meta name="description" content="Description of CourseDetails" />
      </Helmet>
      <div>Course Details</div>
    </div>
  );
}

CourseDetails.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  courseDetails: makeSelectCourseDetails(),
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
)(CourseDetails);
