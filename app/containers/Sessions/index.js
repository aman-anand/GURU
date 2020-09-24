/**
 *
 * Sessions
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
import makeSelectSessions from './selectors';
import reducer from './reducer';
import SessionCard from '../../components/SessionCard/Loadable';
import Header from '../../components/Header/Loadable';
import Bredcrumb from '../../components/Bredcrumb/Loadable';
// NOTE: Style
import { SessionContainer } from './style';

export class Sessions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMobile } = this.props;
    return (
      <SessionContainer>
        <Helmet>
          <title>Sessions</title>
          <meta name="description" content="Description of Sessions" />
        </Helmet>
        <Header title="Sessions" />
        <div className="container">
          <div className="leftBox">
            <Bredcrumb>
              <div className="_bWrapper">
                <span>
                  <a href="/ddd">SESSIONS</a>
                </span>
                <span>{'>'}</span>
                <span>UPCOMING SESSIONS</span>
              </div>
            </Bredcrumb>
          </div>
          {!isMobile ? (
            <div className="rightBox">
              <SessionCard />
              <SessionCard />
              <SessionCard />
            </div>
          ) : null}
        </div>
      </SessionContainer>
    );
  }
}

Sessions.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  sessions: makeSelectSessions(),
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

const withReducer = injectReducer({ key: 'sessions', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Sessions));
