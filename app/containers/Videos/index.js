/**
 *
 * Videos
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectVideos from './selectors';
import reducer from './reducer';

export function Videos() {
  useInjectReducer({ key: 'videos', reducer });

  return (
    <div>
      <Helmet>
        <title>Videos</title>
        <meta name="description" content="Description of Videos" />
      </Helmet>
    </div>
  );
}

Videos.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videos: makeSelectVideos(),
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
)(Videos);
