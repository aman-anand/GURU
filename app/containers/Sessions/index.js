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
import { upcSessionAction, courseAction } from './actions';
// NOTE: Style
import { SessionContainer } from './style';

export class Sessions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sessionRadio: 'upComingSession',
    };
    this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  onChangeRadio = e => {
    const { value } = e.target;
    window.console.log('VALUE', value);
    // this.setState({
    //   sessionRadio: value,
    // });
  };

  componentDidMount() {
    this.props.dispatch(upcSessionAction());
    const parms = {
      page: 1,
      limit: 4,
      status: 0,
      all: true,
    };
    this.props.dispatch(courseAction(parms));
  }

  render() {
    const { isMobile, sessions } = this.props;
    const { upc, courseObj } = sessions || {};
    const { data: courseData } = courseObj || {};
    const { data: upsData } = upc || {};
    window.console.log('Selected Session', this.state.sessionRadio);
    window.console.log('upsData', upsData);
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
                    onChange={e => this.onChangeRadio(e)}
                  />
                  <label htmlFor="attendedSession">
                    <span>ATTENDED SESSIONS</span>
                  </label>
                </div>
              </div>
              <div className="sessionCardWrapper">
                {upsData &&
                  upsData.map(item => {
                    const { name, displaySessionDate, address, attendees } =
                      item || {};
                    return (
                      <SessionBlock
                        data={{ name, displaySessionDate, address, attendees }}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="rightBox">
              <SectionHeading title="Other INTERESTING COURSES" />
              <div className="cardWrapper">
                {courseData &&
                  courseData.map(list => {
                    const {
                      name,
                      sections: sectionsOBJ,
                      duration: durationOBJ,
                      totalVideos: totalVideosOBJ,
                      coverImage: coverImageOBJ,
                      _id,
                    } = list || {};
                    const courseDataOBJ = {
                      courseName: name,
                      totalSections: sectionsOBJ ? sectionsOBJ.length : 0,
                      totalVideosOBJ,
                      durationOBJ,
                      coverImageOBJ,
                      _id,
                    };
                    const sticyTwoData = {
                      name: `${sectionsOBJ ? sectionsOBJ.length : 0} SECTIONS`,
                      classname: 'expert',
                    };
                    return (
                      <SessionCard
                        key={_id}
                        courseData={courseDataOBJ}
                        sticyTwo
                        sticyTwoData={sticyTwoData}
                      />
                    );
                  })}
              </div>
            </div>
          ) : null}
        </div>
      </SessionContainer>
    );
  }
}

Sessions.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  sessions: PropTypes.object,
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
