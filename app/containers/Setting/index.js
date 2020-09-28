/**
 *
 * Setting
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSetting from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';

export function Setting() {
  useInjectReducer({ key: 'setting', reducer });

  return (
    <div>
      <Helmet>
        <title>Setting</title>
        <meta name="description" content="Description of Setting" />
      </Helmet>
      <Header />
      <div>Setting page</div>
    </div>
  );
}

Setting.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  setting: makeSelectSetting(),
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
)(Setting);
