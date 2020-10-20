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
import Footer from '../../components/Footer/Loadable';
import Bredcrumb from '../../components/Bredcrumb/Loadable';
import SessionBlock from '../../components/SessionBlock/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
import certificateIllustration from '../../images/certificate_illustration.png';
import { upcSessionAction, courseAction, attSessionAction } from './actions';
import { language } from '../../services/CommonSetterGetter';
// NOTE: Style
import { SessionContainer } from './style';

export class Sessions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sessionRadio: 'Upcoming',
    };
    this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  onChangeRadio = params => {
    this.setState({
      sessionRadio: params,
    });
    if (['upComingSession'].includes(params)) {
      this.props.dispatch(upcSessionAction());
    } else if (['attended'].includes(params)) {
      this.props.dispatch(attSessionAction());
    }
  };

  componentDidMount() {
    const { sessionRadio } = this.state;
    if (['Upcoming'].includes(sessionRadio)) {
      this.props.dispatch(upcSessionAction());
    }
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
    const { sessionRadio } = this.state;
    const { upc, courseObj } = sessions || {};
    const { data: courseData } = courseObj || {};
    const { data: upsData } = upc || {};
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
                    <a href="/sessions">SESSIONS</a>
                  </span>
                  <span>{'>'}</span>
                  <span>{sessionRadio} SESSIONS</span>
                </div>
              </Bredcrumb>
            ) : null}
            <div className="sessionWrapper">
              <div className="leftNavSession">
                <div className="navList">
                  <label
                    htmlFor="Upcoming"
                    onClick={() => this.onChangeRadio('Upcoming')}
                    className={
                      ['Upcoming'].includes(sessionRadio) ? 'active' : null
                    }
                  >
                    <span>UPCOMING</span>
                  </label>
                </div>
                <div className="navList">
                  <label
                    htmlFor="attended"
                    onClick={() => this.onChangeRadio('attended')}
                    className={
                      ['attended'].includes(sessionRadio) ? 'active' : null
                    }
                  >
                    <span>ATTENDED</span>
                  </label>
                </div>
              </div>
              <div className="sessionCardWrapper">
                {upsData && !upsData.length ? (
                  <div className="emptySession">
                    <i>
                      <img src={certificateIllustration} title="" alt="" />
                    </i>
                    <p className="paraMsg">
                      {['attended'].includes(sessionRadio)
                        ? language().no_completed_session
                        : language().no_upcoming_session}
                    </p>
                  </div>
                ) : null}
                {upsData &&
                  upsData.map(item => {
                    const {
                      name,
                      displaySessionDate,
                      address,
                      attendees,
                      guru,
                      _id,
                    } = item || {};
                    const color = Math.floor(Math.random() * 16777215).toString(
                      16,
                    );
                    return (
                      <SessionBlock
                        key={_id}
                        color={color}
                        selectedSession={this.state.sessionRadio}
                        data={{
                          name,
                          displaySessionDate,
                          address,
                          attendees,
                          guru,
                          _id,
                        }}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="rightBox">
              {courseData && courseData.length ? (
                <SectionHeading title="Other INTERESTING COURSES" />
              ) : null}
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
        {isMobile ? <Footer /> : null}
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
