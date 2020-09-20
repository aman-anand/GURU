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
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import makeSelectCourseDetails from './selectors';
import reducer from './reducer';

export function CourseDetails(props) {
  useInjectReducer({ key: 'courseDetails', reducer });
  window.console.log('THIS', props);
  return (
    <div>
      <Helmet>
        <title>CourseDetails</title>
        <meta name="description" content="Description of CourseDetails" />
      </Helmet>
      <div>
        Course Details sdsd dev csbc {this}
        <Button color="primary" variant="contained">
          Button
        </Button>
        <Card>ffff</Card>
        <p>PARA</p>
      </div>
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
