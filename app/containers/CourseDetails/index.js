/* eslint-disable jsx-a11y/iframe-has-title */
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
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { courseDetailsAction } from '../Course/actions';
import Header from '../../components/Header/Loadable';
import reducer from '../Course/reducer';
import makeSelectCourseDetails from './selectors';
import { getFromLocalStore } from '../../services/CommonSetterGetter';
// NOTE: Material

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
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
export class CourseDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      videoModel: false,
    };
    this.store = getFromLocalStore(['token', 'id', 'role', 'expires', 'phone']);
    this.color = Math.floor(Math.random() * 16777215).toString(16);
    this.listOnClickBox = this.listOnClickBox.bind(this);
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

  render() {
    const { isMobile, theme, courseDetails } = this.props || {};
    const { expanded } = this.state;
    const { courseDetailsObj } = courseDetails || {};
    const { data } = courseDetailsObj || {};
    const { course, review, attempt } = data || {};
    const { progress } = attempt || {};
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
                        const {
                          data: sectionsData,
                          assessment,
                          description: desc,
                        } = ele || {};
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
                              <p className="description">{desc}</p>
                              {sectionsData &&
                                sectionsData.map(element => {
                                  const {
                                    title,
                                    duration: durationTime,
                                    type,
                                    url,
                                  } = element || {};
                                  return (
                                    <div
                                      className="listItembox"
                                      onClick={() =>
                                        this.listOnClickBox({ type, url })
                                      }
                                      role="presentation"
                                    >
                                      {['video'].includes(type) ? (
                                        <div className="iconbox video">
                                          <svg
                                            width="20"
                                            height="14"
                                            viewBox="0 0 20 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                                              fill="white"
                                            />
                                          </svg>
                                        </div>
                                      ) : null}
                                      {['File'].includes(type) ? (
                                        <div className="iconbox pdf">
                                          <svg
                                            width="20"
                                            height="19"
                                            viewBox="0 0 20 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M2 0C0.89 0 0 0.89 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H10V19L13 16L16 19V14H18C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12V5V3V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H14H2ZM10 2L13 4L16 2V5.5L19 7L16 8.5V12L13 10L10 12V8.5L7 7L10 5.5V2ZM2 2H7V4H2V2ZM2 6H5V8H2V6ZM2 10H7V12H2V10Z"
                                              fill="#403F3F"
                                            />
                                          </svg>
                                        </div>
                                      ) : null}
                                      {['blog'].includes(type) ? (
                                        <div className="iconbox blog">
                                          <svg
                                            width="22"
                                            height="16"
                                            viewBox="0 0 22 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M4 0H22V12H4V0ZM13 3C13.7956 3 14.5587 3.31607 15.1213 3.87868C15.6839 4.44129 16 5.20435 16 6C16 6.79565 15.6839 7.55871 15.1213 8.12132C14.5587 8.68393 13.7956 9 13 9C12.2044 9 11.4413 8.68393 10.8787 8.12132C10.3161 7.55871 10 6.79565 10 6C10 5.20435 10.3161 4.44129 10.8787 3.87868C11.4413 3.31607 12.2044 3 13 3ZM8 2C8 2.53043 7.78929 3.03914 7.41421 3.41421C7.03914 3.78929 6.53043 4 6 4V8C6.53043 8 7.03914 8.21071 7.41421 8.58579C7.78929 8.96086 8 9.46957 8 10H18C18 9.46957 18.2107 8.96086 18.5858 8.58579C18.9609 8.21071 19.4696 8 20 8V4C19.4696 4 18.9609 3.78929 18.5858 3.41421C18.2107 3.03914 18 2.53043 18 2H8ZM0 4H2V14H18V16H0V4Z"
                                              fill="white"
                                            />
                                          </svg>
                                        </div>
                                      ) : null}
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
                              {/* Assessment */}
                              {assessment ? (
                                <Assessment data={assessment} />
                              ) : null}
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                  {/* Assessment */}
                  {sections &&
                    sections.map((list, idx) => {
                      const attemptArray = progress[idx];
                      const { assessment: assessmentObj } = list || {};
                      return (
                        <Assessment
                          attempt={attemptArray}
                          data={assessmentObj}
                        />
                      );
                    })}
                  <Button
                    className="downlodCertificate"
                    variant="contained"
                    color="primary"
                    type="button"
                  >
                    DOWNLOAD CERTIFICATE
                  </Button>
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
            />
          </DialogContent>
        </Dialog>
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
