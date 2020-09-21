/**
 *
 * Certificates
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCertificates from './selectors';
import reducer from './reducer';

export function Certificates() {
  useInjectReducer({ key: 'certificates', reducer });

  return (
    <div>
      <Helmet>
        <title>Certificates</title>
        <meta name="description" content="Description of Certificates" />
      </Helmet>
    </div>
  );
}

Certificates.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  certificates: makeSelectCertificates(),
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
)(Certificates);
