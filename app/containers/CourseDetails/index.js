/* eslint-disable no-param-reassign */
/**
 *
 * CourseDetails
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import injectReducer from 'utils/injectReducer';

import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { courseDetailsAction } from '../Course/actions';
import Header from '../../components/Header/Loadable';
import reducer from '../Course/reducer';
import makeSelectCourseDetails from './selectors';
import { getFromLocalStore } from '../../services/CommonSetterGetter';

import SessionCard from '../../components/SessionCard/Loadable';
import VideoCard from '../../components/VideoCard/Loadable';
import VideoPlayer from '../../components/VideoPlayer/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
import Assessment from '../../components/Assessment';
// NOTE: Styles
import { GuruCoursesDetailsContainer } from './style';

function TabContainer({ children, dir }) {
  return (
    <Typography className="tabsWrapper" component="div" dir={dir}>
      {children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string,
};
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

export class CourseDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.store = getFromLocalStore(['token', 'id', 'role', 'expires', 'phone']);
  }

  static getDerivedStateFromProps(props, state) {
    const { match } = props || {};
    const { params } = match || {};
    const { courseId: COURSE_ID } = params || {};
    state.COURSE_ID = COURSE_ID || null; // Set LeadId
    return null;
  }

  componentDidMount() {
    const { COURSE_ID } = this.state;
    const { phone: number } = this.store;
    const paramOBJ = {
      COURSE_ID,
      number,
    };
    this.props.dispatch(courseDetailsAction(paramOBJ));
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      value: index,
    });
  };

  handleChangeAccor = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { isMobile, theme, courseDetails } = this.props || {};
    const { expanded } = this.state;
    const { courseDetailsObj } = courseDetails || {};
    const { data } = courseDetailsObj || {};
    const { course, review } = data || {};
    const {
      coverImage,
      coverVideo,
      name: courseName,
      duration,
      totalSections,
      totalVideos,
      totalAssessments,
      description,
      totalStudents,
      rating,
      sections,
    } = course || {};
    return (
      <GuruCoursesDetailsContainer>
        <Helmet>
          <title>COURSE DETAILS</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        {!isMobile ? (
          <Header title="COURSE DETAILS" />
        ) : (
          <OptionalHeader title="COURSE DETAILS" goTo="/courses" />
        )}
        <div className="container">
          <div className="leftBox">
            <VideoPlayer
              data={{ coverImage, coverVideo, courseName, duration }}
            />
            <div className="tabsContainer">
              <AppBar position="static" color="default" className="tabsHeader">
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="fullWidth"
                  className="tabBlock"
                >
                  <Tab className="tabButton" label="BRIEF" />
                  <Tab className="tabButton" label="CURRICULUM" />
                  <Tab className="tabButton" label="QUIZ" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <TabContainer dir={theme.direction}>
                  <div className="tabDataBox">
                    <p>{description}</p>
                    <div className="brifSessionBox">
                      <div className="sectionItem">
                        <i className="icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 4H0V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16V18H2V4ZM18 0H6C5.46957 0 4.96086 0.210714 4.58579 0.585786C4.21071 0.960859 4 1.46957 4 2V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM10 12.5V3.5L16 8L10 12.5Z"
                              fill="black"
                            />
                          </svg>
                        </i>
                        <div className="_content">
                          <span>{totalSections} Sections</span>
                          <span>{totalVideos} Videos</span>
                        </div>
                      </div>
                      <div className="certificateItem">
                        <i className="icon">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 0C0.89 0 0 0.89 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H10V19L13 16L16 19V14H18C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12V5V3V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H14H2ZM10 2L13 4L16 2V5.5L19 7L16 8.5V12L13 10L10 12V8.5L7 7L10 5.5V2ZM2 2H7V4H2V2ZM2 6H5V8H2V6ZM2 10H7V12H2V10Z"
                              fill="black"
                            />
                          </svg>
                        </i>
                        <div className="_content">
                          <span>CERTIFICATE</span>
                          <span>{totalAssessments} ASSESSMENTS</span>
                        </div>
                      </div>
                    </div>
                    {/* NOTE: start */}
                    <p>{totalStudents} shishya have watched this course</p>
                    <div className="review_box">
                      <span>REVIEWS</span>
                      <span>{rating}</span>
                      <span>Based on {review ? review.length : 0} reviews</span>
                    </div>
                    <div className="commentsWrapper">
                      <p>COMMENTS</p>
                      <div className="cz_list">
                        <div />
                        <div>
                          <input
                            placeholder="write your feedback here"
                            type="text"
                          />
                        </div>
                      </div>
                      {review &&
                        review.map(item => {
                          const { addedBy, addedOn, review: reviewText, _id } =
                            item || {};
                          const { fName, lName } = addedBy || {};
                          return (
                            <div className="cz_list" key={_id}>
                              <div />
                              <div>
                                <span>{`${fName} ${lName}`}</span>
                                <span>{addedOn || 'NULL'}</span>
                                <span>{reviewText || null}</span>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    {/* NOTE: end */}
                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <div className="cariculamBox">
                    {sections &&
                      sections.map((ele, idx) => {
                        const { name, _id } = ele || {};
                        const panel = `panel${idx}`;
                        const { data: sectionsData } = ele || {};
                        return (
                          <Accordion
                            key={_id}
                            expanded={expanded === panel}
                            onChange={this.handleChangeAccor(panel)}
                            className="accordianWrapper"
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls={`${panel}bh-content`}
                              id={`${panel}bh-header`}
                              className="headingRow"
                            >
                              <p className="accorHeading">{name}</p>
                            </AccordionSummary>
                            <AccordionDetails className="accordianData">
                              {sectionsData &&
                                sectionsData.map(element => {
                                  const { title, duration: durationTime } =
                                    element || {};
                                  return (
                                    <div className="listItembox">
                                      <div className="iconbox">
                                        <svg
                                          width="10"
                                          height="13"
                                          viewBox="0 0 10 13"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M0 0L10 6.5L0 13V0Z"
                                            fill="white"
                                          />
                                        </svg>
                                      </div>
                                      <div className="listContent">
                                        <span>{title}</span>
                                        {durationTime ? (
                                          <span>{durationTime}</span>
                                        ) : null}
                                      </div>
                                      <div className="listStatus">
                                        <svg
                                          width="12"
                                          height="10"
                                          viewBox="0 0 12 10"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11 1L4.125 9L1 5.36364"
                                            stroke="#DA3A33"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  );
                                })}
                              <Assessment />
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  <Assessment />
                  <Assessment />
                  <Assessment />
                </TabContainer>
              </SwipeableViews>
            </div>
          </div>
          {!isMobile ? (
            <div className="rightBox">
              <SectionHeading title="Other INTERESTING COURSES" />
              <div className="cardWrapper">
                <SessionCard
                  sticyTwo
                  sticyTwoData={{ name: '3 SECTIONS', classname: 'expert' }}
                />
                <SessionCard
                  sticyTwo
                  sticyTwoData={{ name: 'BEGINNER', classname: 'beginner' }}
                />
              </div>
              <SectionHeading
                class_name="marginTop"
                title="Other INTERESTING VIDEOS"
              />
              <div className="cardWrapper">
                <VideoCard />
                <VideoCard />
              </div>
            </div>
          ) : null}
        </div>
        {/* {isMobile ? <Footer /> : null} */}
      </GuruCoursesDetailsContainer>
    );
  }
}

CourseDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  courseDetails: makeSelectCourseDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const withReducer = injectReducer({ key: 'courseDetails', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withConnect,
  memo,
)(
  withStyles(styles, { withTheme: true })(
    withSizes(mapSizesToProps)(CourseDetails),
  ),
);
