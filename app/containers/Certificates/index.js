/**
 *
 * Certificates
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import injectReducer from 'utils/injectReducer';
import makeSelectCertificates from './selectors';
import reducer from './reducer';
import SessionCard from '../../components/SessionCard/Loadable';
import Header from '../../components/Header/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';

// NOTE: Style
import { CertificatesContainer } from './style';

export class Certificates extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMobile } = this.props;
    return (
      <CertificatesContainer>
        <Helmet>
          <title>Certificates</title>
          <meta name="description" content="Description of Certificates" />
        </Helmet>
        <Header title="Sessions" />
        <div className="container">
          <div className="leftBox">
            <UpcommingSession
              title="CERTIFICATES"
              subtitle="1 certificates earned"
            />
          </div>
          {!isMobile ? (
            <div className="rightBox">
              <SessionCard />
              <SessionCard />
              <SessionCard />
            </div>
          ) : null}
        </div>
      </CertificatesContainer>
    );
  }
}

Certificates.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  certificates: makeSelectCertificates(),
});

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
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

const withReducer = injectReducer({ key: 'certificates', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Certificates));
