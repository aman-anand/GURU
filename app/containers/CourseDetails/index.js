/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-param-reassign */
/**
 *
 * CourseDetails
 *
 */

import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import withSizes from 'react-sizes';
import ModalVideo from 'react-modal-video';
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
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import history from '../../utils/history';
import {
  courseDetailsAction,
  courseAction,
  submitReviewAction,
  submitQuizAction,
} from '../Course/actions';
import Header from '../../components/Header/Loadable';
import reducer from '../Course/reducer';
import makeSelectCourseDetails from './selectors';
import {
  getFromLocalStore,
  languageString,
} from '../../services/CommonSetterGetter';
// NOTE: Material

import SessionCard from '../../components/SessionCard/Loadable';
import VideoPlayer from '../../components/VideoPlayer/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
import Assessment from '../../components/Assessment';
import ListItembox from '../../components/ListItembox';
import Ratings from '../../components/Ratings/Loadable';
// import Exams from '../../components/Exams/Loadable';
import Quiz from '../../components/Quiz/Loadable';
import Result from '../../components/Result/Loadable';
import defoultProfileImg from '../../images/defoult_profile.png';
// NOTE: Styles
import { GuruCoursesDetailsContainer } from './style';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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
      audioModel: false,
      comment: '',
      startExam: false,
      tryAgain: false,
      sessionPpassed: false,
      congratulation: false,
      startAssesment: '',
      alert: false,
      snake: false,
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

  alertClose = () => {
    this.setState({
      alert: false,
    });
    // window.location.reload();
  };

  componentDidMount() {
    const { COURSE_ID } = this.state;
    const { phone: number } = this.store;
    const paramOBJ = {
      COURSE_ID,
      number,
    };
    this.props.dispatch(courseDetailsAction(paramOBJ));
    const parms = {
      page: 1,
      limit: 3,
    };
    this.props.dispatch(courseAction(parms));
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

  setVideoOpen = () => {
    this.setState({
      videoModel: false,
    });
  };

  snakeClose = () => {
    this.setState({
      snake: false,
    });
  };

  audioClose = () => {
    this.setState({
      audioModel: false,
    });
  };

  listOnClickBox = params => {
    const { type, url, youtubeId, blogId } = params || {};
    if (['video'].includes(type)) {
      if (youtubeId) {
        this.setState({
          videoModel: true,
          youtubeId,
          snake: true,
        });
      } else {
        this.setState({
          snake: true,
          snakeMsg: 'Video is not avalable',
        });
      }
    } else if (['File', 'file'].includes(type)) {
      if (url) {
        window.open(url, '_blank');
      } else {
        this.setState({
          snake: true,
          snakeMsg: 'File are not avalable',
        });
      }
    } else if (['blog', 'Blog'].includes(type)) {
      if (blogId) {
        window.open(blogId, '_blank');
      } else {
        this.setState({
          snake: true,
          snakeMsg: 'Blog are not avalable',
        });
      }
    } else if (['audio'].includes(type)) {
      console.log('URL', url);
      if (url) {
        this.setState({
          audioModel: true,
          audioURL: url,
        });
      } else {
        this.setState({
          snake: true,
          snakeMsg: 'Audio is not avalable',
        });
      }
    }
  };

  videoModalClose = () => {
    this.setState({ videoModel: false });
  };

  audioModalClose = () => {
    this.setState({ audioModel: false });
  };

  onChangeComment = value => {
    this.setState({
      comment: value,
    });
  };

  submitComment = () => {
    const { comment, COURSE_ID } = this.state;
    const jsonOBJ = {
      review: comment,
      rating: 3,
      addedForId: COURSE_ID,
      typeOf: 'course',
      reviewType: 'text',
    };
    this.props.dispatch(submitReviewAction(jsonOBJ)).then(() => {
      this.setState({
        comment: '',
      });
    });
  };

  startExamAction = params => {
    // const { time, title, questions } = params || {};
    // console.log('DATA', params);
    this.setState({
      startExam: true,
      startAssesment: params,
    });
  };

  submitQuiz = params => {
    const { answarList, data, attemptID } = params || {};
    const { startAssesment, courseId } = data || {};
    const { _id } = startAssesment || {};
    const jsonOBJ = {
      course: courseId,
      assessment: _id,
      attemptId: attemptID,
      answers: [...answarList],
    };
    this.props.dispatch(submitQuizAction(jsonOBJ)).then(res => {
      const { payload } = res || {};
      const { data: payloadData, success, message } = payload || {};
      const { type, certificate } = payloadData || {};
      if (!success) {
        this.setState({
          alert: true,
          message,
        });
      }
      if (success && ['failed'].includes(type)) {
        this.setState({
          startExam: false,
          tryAgain: true,
        });
      }
      if (success && ['passed'].includes(type)) {
        this.setState({
          startExam: false,
          tryAgain: false,
          sessionPpassed: true,
        });
      }
      if (success && ['passed'].includes(type) && certificate) {
        this.setState({
          startExam: false,
          tryAgain: false,
          sessionPpassed: false,
          congratulation: true,
        });
      }
    });
  };

  render() {
    const { isMobile, theme, courseDetails } = this.props || {};
    const { courseDetailsObj, courseObj } = courseDetails || {};
    const { data } = courseDetailsObj || {};
    const { course, review, attempt } = data || {};
    const { progress, completed, certificate, _id: attemptID } = attempt || {};
    const { data: courseData } = courseObj || {};
    const {
      coverImage,
      coverVideo,
      name: courseName,
      duration,
      totalSections,
      totalVideos,
      totalAssessments,
      description,
      sections,
      id,
      youtubeId,
    } = course || {};
    const {
      comment,
      startExam,
      tryAgain,
      sessionPpassed,
      congratulation,
      startAssesment,
      expanded,
    } = this.state;
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
        {startExam ? (
          <Fragment>
            {/* NOTE: Exams */}
            {/* <Exams
              data={{ startAssesment, courseName, courseId: id, attemptID }}
              submitQuiz={this.submitQuiz}
            /> */}
            <Quiz
              data={{
                startAssesment,
                courseName,
                courseId: id,
                attemptID,
              }}
              submitQuiz={this.submitQuiz}
            />
          </Fragment>
        ) : null}
        {tryAgain ? (
          <Fragment>
            {/* NOTE: Result */}
            <Result type="failed" />
          </Fragment>
        ) : null}
        {sessionPpassed ? (
          <Fragment>
            <Result type="passed" />
          </Fragment>
        ) : null}
        {congratulation ? (
          <Fragment>
            <Result type="passed" certificate />
          </Fragment>
        ) : null}
        {!startExam && !tryAgain && !sessionPpassed && !congratulation ? (
          <Fragment>
            <div className="container">
              {/* NOTE: All data */}
              <div className="leftBox">
                <VideoPlayer
                  data={{
                    coverImage,
                    coverVideo,
                    courseName,
                    duration,
                    youtubeId,
                  }}
                />
                <div className="tabsContainer">
                  <AppBar
                    position="static"
                    color="default"
                    className="tabsHeader"
                  >
                    <Tabs
                      value={this.state.value}
                      onChange={this.handleChange}
                      indicatorColor="secondary"
                      textColor="secondary"
                      variant="fullWidth"
                      className="tabBlock"
                    >
                      <Tab
                        className="tabButton"
                        label={languageString('txt_brief').toUpperCase()}
                      />
                      <Tab
                        className="tabButton"
                        label={languageString('txt_curriculum').toUpperCase()}
                      />
                      <Tab
                        className="tabButton"
                        label={languageString('txt_quiz').toUpperCase()}
                      />
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
                        <Button
                          className="startCourseBtn"
                          variant="contained"
                          color="primary"
                          type="button"
                          onClick={() => {
                            this.setState({
                              value: 1,
                            });
                          }}
                        >
                          START COURSE
                        </Button>
                        {/* NOTE: start */}
                        {/* <p>{totalStudents} shishya have watched this course</p> */}
                        <div className="review_box">
                          <span>REVIEWS</span>
                          <Ratings />
                          <span>
                            Based on {review ? review.length : 0} reviews
                          </span>
                        </div>
                        <div className="commentsWrapper">
                          <p>COMMENTS</p>
                          <div className="postCommentwrapper">
                            <div className="icon">
                              <img src={defoultProfileImg} alt="" title="" />
                            </div>
                            <div className="postComment">
                              <div className="leftPostCom">
                                <input
                                  placeholder="write your feedback here"
                                  type="text"
                                  value={this.state.comment}
                                  onChange={e =>
                                    this.onChangeComment(e.target.value)
                                  }
                                />
                              </div>
                              <Button
                                type="button"
                                disabled={!comment.length}
                                onClick={() => this.submitComment()}
                              >
                                Send
                              </Button>
                            </div>
                          </div>
                          {review &&
                            review.map(item => {
                              const {
                                addedBy,
                                addedOn,
                                review: reviewText,
                                _id,
                              } = item || {};
                              const { fName, lName, profileImage } =
                                addedBy || {};
                              return (
                                <div className="cz_list" key={_id}>
                                  <div>
                                    <img
                                      src={profileImage || defoultProfileImg}
                                      alt=""
                                      title=""
                                    />
                                  </div>
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
                            const attemptArray = progress[idx];
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
                                        thumb,
                                        youtubeId: YOU_ID,
                                        blogId,
                                      } = element || {};
                                      return (
                                        <ListItembox
                                          data={{
                                            type,
                                            title,
                                            durationTime,
                                            url,
                                            thumb,
                                            youtubeId: YOU_ID,
                                            blogId,
                                          }}
                                          onMethod={this.listOnClickBox}
                                        />
                                      );
                                    })}
                                  {/* Assessment */}
                                  {assessment ? (
                                    <Assessment
                                      data={assessment}
                                      attempt={attemptArray}
                                      onAction={this.startExamAction}
                                    />
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
                              onAction={this.startExamAction}
                            />
                          );
                        })}
                      <Button
                        className="downlodCertificate"
                        variant="contained"
                        color="primary"
                        type="button"
                        disabled={!completed && !certificate}
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
                          name: `${
                            sectionsOBJ ? sectionsOBJ.length : 0
                          } SECTIONS`,
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
          </Fragment>
        ) : null}

        {/* Video Model Start */}
        {this.state.videoModel && this.state.youtubeId ? (
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={this.state.videoModel}
            videoId={youtubeId}
            onClose={() => this.setVideoOpen()}
          />
        ) : null}
        {/* Video Model End */}

        {/* Audio Model Start */}
        {this.state.audioModel ? (
          <Dialog
            open={this.state.audioModel}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.audioClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            className="dialogAudioWrapper"
          >
            <DialogContent className="audioWrapp">
              <figure>
                <audio controls src={this.state.audioURL}>
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </figure>
            </DialogContent>
          </Dialog>
        ) : null}
        {/* Audio Model End */}

        {/* NOTE: Exam responce */}
        <Dialog open={this.state.alert}>
          <DialogContent className="sumanta">
            <DialogContentText className="logoutWrapp">
              <span>{this.state.message}</span>
              <Button
                onClick={this.alertClose}
                variant="contained"
                color="primary"
              >
                ok
              </Button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        {/* Snakebar */}
        <Snackbar
          open={this.state.snake}
          autoHideDuration={2000}
          onClose={this.snakeClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={this.snakeClose}
            severity="warning"
            className="successAlert"
          >
            {this.state.snakeMsg}
          </Alert>
        </Snackbar>
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
