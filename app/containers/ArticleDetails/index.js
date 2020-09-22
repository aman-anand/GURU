/**
 *
 * ArticleDetails
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectArticleDetails from './selectors';
import reducer from '../Articles/reducer';

export function ArticleDetails() {
  useInjectReducer({ key: 'articleDetails', reducer });

  return (
    <div>
      <Helmet>
        <title>ArticleDetails</title>
        <meta name="description" content="Description of ArticleDetails" />
      </Helmet>
      <div>Article Details</div>
    </div>
  );
}

ArticleDetails.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articleDetails: makeSelectArticleDetails(),
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
)(ArticleDetails);
