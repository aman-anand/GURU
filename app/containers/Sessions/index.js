/* eslint-disable jsx-a11y/anchor-is-valid */
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
import SessionBlock from '../../components/SessionBlock/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
// NOTE: Style
import { SessionContainer } from './style';

export class Sessions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sessionRadio: 'upComingSession',
    };
  }

  onChangeRadio = e => {
    const { value } = e.target;
    window.console.log('VALUE', value);
  };

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
            {!isMobile ? (
              <Bredcrumb>
                <div className="_bWrapper">
                  <span>
                    <a>SESSIONS</a>
                  </span>
                  <span>{'>'}</span>
                  <span>UPCOMING SESSIONS</span>
                </div>
              </Bredcrumb>
            ) : null}
            <div className="sessionWrapper">
              <div className="leftNavSession">
                <div className="navList">
                  <input
                    id="upComingSession"
                    type="radio"
                    name="session"
                    value="upComingSession"
                    ckacked={['upComingSession'].includes(
                      this.state.sessionRadio,
                    )}
                    onChange={e => this.onChangeRadio(e)}
                  />
                  <label htmlFor="upComingSession">
                    <span>UPCOMING SESSIONS</span>
                  </label>
                </div>
                <div className="navList">
                  <input
                    id="attendedSession"
                    type="radio"
                    name="session"
                    value="attendedSession"
                    ckacked={['attendedSession'].includes(
                      this.state.sessionRadio,
                    )}
                    onChange={e => this.onChangeRadio(e)}
                  />
                  <label htmlFor="attendedSession">
                    <span>ATTENDED SESSIONS</span>
                  </label>
                </div>
              </div>
              <div className="sessionCardWrapper">
                <SessionBlock />
                <SessionBlock />
                <SessionBlock />
                <SessionBlock />
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="rightBox">
              <SectionHeading title="Other INTERESTING COURSES" />
              <div className="cardWrapper">
                <SessionCard />
                <SessionCard />
                <SessionCard />
              </div>
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
