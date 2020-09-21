/**
 *
 * Articles
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectArticles from './selectors';
import reducer from './reducer';

// NOTE: Style
// import { HomeContainer } from '../Home/style';

export function Articles() {
  useInjectReducer({ key: 'articles', reducer });

  return (
    <div>
      <Helmet>
        <title>Articles</title>
        <meta name="description" content="Description of Articles" />
      </Helmet>
    </div>
  );
}

Articles.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articles: makeSelectArticles(),
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
)(Articles);
