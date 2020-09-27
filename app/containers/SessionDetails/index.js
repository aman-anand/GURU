/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * SessionDetails
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import injectReducer from 'utils/injectReducer';
import GoogleMapReact from 'google-map-react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import reducer from '../Sessions/reducer';
import makeSelectSessionDetails from './selectors';
import SessionCard from '../../components/SessionCard/Loadable';
import Header from '../../components/Header/Loadable';
import Bredcrumb from '../../components/Bredcrumb/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
import ListItembox from '../../components/ListItembox';
import { courseAction, sessionDetailsAction } from '../Sessions/actions';
// NOTE: Style
import { SessionContainer } from '../Sessions/style';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
const AnyReactComponent = () => (
  <div
    style={{
      color: 'white',
      background: 'red',
      padding: '5px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    *
  </div>
);
export class SessionDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTabs: 'sessions',
    };
    this.onClickTabs = this.onClickTabs.bind(this);
    this.listOnClickBox = this.listOnClickBox.bind(this);
  }

  // static defaultProps = {
  //   center: { lat: 19.301459, lng: 72.8589 },
  //   zoom: 11,
  // };

  static getDerivedStateFromProps(props, state) {
    const { match } = props || {};
    const { params } = match || {};
    const { sessionId: SESSION_ID } = params || {};
    state.SESSION_ID = SESSION_ID || null; // Set LeadId
    return null;
  }

  componentDidMount() {
    const { SESSION_ID } = this.state;
    const paramOBJ = {
      SESSION_ID,
    };
    this.props.dispatch(sessionDetailsAction(paramOBJ));
    const parms = {
      page: 1,
      limit: 4,
      status: 0,
      all: true,
    };
    this.props.dispatch(courseAction(parms));
  }

  onClickTabs = params => {
    this.setState({
      activeTabs: params,
    });
    window.console.log('PARAMS', params);
  };

  listOnClickBox = params => {
    const { type, url } = params || {};
    if (['video'].includes(type)) {
      this.setState({
        videoModel: true,
        url,
      });
    } else if (['File', 'blog'].includes(type)) {
      window.open(url, '_blank');
    }
  };

  handleClose = () => {
    this.setState({ videoModel: false });
  };

  tabComponent = () => (
    <div className="tabwrap">
      <div
        className={`list ${
          ['sessions'].includes(this.state.activeTabs) ? 'active' : null
        }`}
        onClick={() => this.onClickTabs('sessions')}
        role="presentation"
      >
        <span>SESSIONS</span>
      </div>
      <div
        className={`list ${
          ['curriculum'].includes(this.state.activeTabs) ? 'active' : null
        }`}
        onClick={() => this.onClickTabs('curriculum')}
        role="presentation"
      >
        <span>CURRICULUM</span>
      </div>
    </div>
  );

  render() {
    const { activeTabs } = this.state;
    const { isMobile, sessionDetails } = this.props;
    const { courseObj, details } = sessionDetails || {};
    const { data: courseData } = courseObj || {};
    const { data: detailsData } = details || {};
    const {
      name,
      coverVideo,
      description,
      displaySessionDate,
      duration,
      address,
      location,
    } = detailsData || {};
    const [first] = name ? name.split('') : [];
    const { locality, city, state, pincode } = address || {};
    const { coordinates } = location || {};
    const [giFirst, giSecound] = coordinates || [];
    const defaultProps = {
      center: { lat: giFirst || 19.301459, lng: giSecound || 72.8589 },
      zoom: 11,
    };
    return (
      <SessionContainer>
        <Helmet>
          <title>Sessions Details</title>
          <meta name="description" content="Description of Sessions" />
        </Helmet>
        {!isMobile ? (
          <Header title="SESSION DETAIL" />
        ) : (
          <OptionalHeader title="SESSION DETAIL" goTo="/sessions" />
        )}
        <div className="container">
          <div className="leftBox">
            {!isMobile ? (
              <Bredcrumb>
                <div className="_bWrapper">
                  <span>
                    <a>SESSIONS</a>
                  </span>
                  <span>{'>'}</span>
                  <span>SESSION DETAIL</span>
                </div>
              </Bredcrumb>
            ) : null}
            <div className="detailsSessionWrapper">
              {isMobile ? this.tabComponent() : null}
              <div className="imgWraper">
                <video width="100%" controls>
                  <track kind="captions" {...this.props} />
                  <source src={coverVideo} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </div>
              {!isMobile ? this.tabComponent() : null}
              <div className="tabdata">
                {['sessions'].includes(activeTabs) ? (
                  <Fragment>
                    <div className="playerDesc">
                      <div className="box_1">
                        <i>{first}</i>
                      </div>
                      <div className="box_2">
                        <p>
                          <span className="tex_big">{name}</span>
                          <span className="tex_small">
                            Duration: {duration}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="dateBox">{displaySessionDate}</div>
                    <p className="description">{description}</p>
                    <p>
                      <b>Address:</b>{' '}
                      {`${locality}, ${city}, ${state}, ${pincode}`}
                    </p>
                    <div className="map" id="map">
                      <GoogleMapReact
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                      >
                        <AnyReactComponent
                          lat={defaultProps.center.lat}
                          lng={defaultProps.center.lng}
                          text="L"
                        />
                      </GoogleMapReact>
                    </div>
                  </Fragment>
                ) : null}
                {['curriculum'].includes(activeTabs) ? (
                  <Fragment>
                    <div className="playerDesc">
                      <div className="box_1">
                        <i>I</i>
                      </div>
                      <div className="box_2">
                        <p>
                          <span className="tex_big">
                            Insurance - Basic Level{' '}
                          </span>
                          <span className="tex_small">Duration: 14 Hrs</span>
                        </p>
                      </div>
                    </div>
                    {/* Accordian */}
                    <div className="accordianwrapper">
                      <label className="acorlist active">
                        <div className="accorLabel" htmlFor="id_1">
                          <span>BEGINNER FINANCE</span>
                          <i className="icon">
                            <svg
                              width="12"
                              height="7"
                              viewBox="0 0 12 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L6 6L11 1"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                        </div>
                        <input type="radio" name="accor" id="id_1" />
                        <div className="accorData">
                          <ListItembox
                            data={{
                              type: 'blog',
                              title: 'Sumanta',
                              durationTime: '0 ll',
                              url: 'google.com',
                            }}
                            onMethod={this.listOnClickBox}
                            arrow={false}
                          />
                        </div>
                      </label>
                      <label className="acorlist active">
                        <div className="accorLabel" htmlFor="id_2">
                          <span>BEGINNER FINANCE</span>
                          <i className="icon">
                            <svg
                              width="12"
                              height="7"
                              viewBox="0 0 12 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L6 6L11 1"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                        </div>
                        <input type="radio" name="accor" id="id_2" />
                        <div className="accorData">Accor data 2</div>
                      </label>
                    </div>
                  </Fragment>
                ) : null}
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
                      name: courseName,
                      sections: sectionsOBJ,
                      duration: durationOBJ,
                      totalVideos: totalVideosOBJ,
                      coverImage: coverImageOBJ,
                      _id,
                    } = list || {};
                    const courseDataOBJ = {
                      courseName,
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
        <Dialog
          open={this.state.videoModel}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          className="dialogVideoWrapper"
        >
          <DialogContent className="dWrapp">
            <iframe
              id="player"
              type="text/html"
              src={this.state.url}
              frameBorder="0"
              title="iframe"
            />
          </DialogContent>
        </Dialog>
      </SessionContainer>
    );
  }
}

SessionDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  sessionDetails: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  sessionDetails: makeSelectSessionDetails(),
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
const withReducer = injectReducer({ key: 'sessionDetails', reducer });
export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(SessionDetails));
