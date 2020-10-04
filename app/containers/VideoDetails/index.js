/* eslint-disable no-param-reassign */
/**
 *
 * VideoDetails
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
import Button from '@material-ui/core/Button';
import makeSelectVideoDetails from './selectors';
import reducer from '../Videos/reducer';
import Header from '../../components/Header/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
import VideoPlayer from '../../components/VideoPlayer/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
import Ratings from '../../components/Ratings/Loadable';
import {
  courseAction,
  videosDetailsAction,
  submitReviewAction,
} from '../Videos/actions';
import defoultProfileImg from '../../images/defoult_profile.png';

// NOTE: Style
import { VideoDetailsContainer } from './style';
export class VideoDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { match } = props || {};
    const { params } = match || {};
    const { videosId: VIDEO_ID } = params || {};
    state.VIDEO_ID = VIDEO_ID || null; // Set videosId
    return null;
  }

  componentDidMount() {
    const { VIDEO_ID } = this.state;
    const parms = {
      page: 1,
      limit: 4,
      status: 0,
      all: true,
    };
    const paramOBJ = {
      VIDEO_ID,
    };
    this.props.dispatch(courseAction(parms));
    this.props.dispatch(videosDetailsAction(paramOBJ));
  }

  onChangeComment = value => {
    this.setState({
      comment: value,
    });
  };

  submitComment = () => {
    const { comment, VIDEO_ID } = this.state;
    const jsonOBJ = {
      review: comment,
      rating: 3,
      addedForId: VIDEO_ID,
      typeOf: 'video',
      reviewType: 'text',
    };
    this.props.dispatch(submitReviewAction(jsonOBJ)).then(() => {
      this.setState({
        comment: '',
      });
    });
  };

  render() {
    const { isMobile, videoDetails } = this.props || {};
    const { courseObj, details } = videoDetails || {};
    const { data: courseData } = courseObj || {};
    const { video, review } = details || {};
    const {
      name: courseName,
      description,
      thumb: coverImage,
      videoUrl: coverVideo,
      duration,
    } = video || {};
    const { comment } = this.state;
    return (
      <VideoDetailsContainer>
        <Helmet>
          <title>VideoDetails</title>
          <meta name="description" content="Description of VideoDetails" />
        </Helmet>
        {!isMobile ? (
          <Header title="VIDEO" />
        ) : (
          <OptionalHeader title="VIDEO" goTo="/videos" />
        )}
        <div className="container">
          <div className="leftBox">
            <VideoPlayer
              data={{ coverImage, coverVideo, courseName, duration }}
            />
            <div className="_descBox">
              <p className="_desc">{description}</p>
              <div className="review_box">
                <span>REVIEWS</span>
                <Ratings />
                <span>Based on {review ? review.length : 0} reviews</span>
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
                        onChange={e => this.onChangeComment(e.target.value)}
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
                    const { addedBy, addedOn, review: reviewText, _id } =
                      item || {};
                    const { fName, lName, profileImage } = addedBy || {};
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
      </VideoDetailsContainer>
    );
  }
}

VideoDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const mapStateToProps = createStructuredSelector({
  videoDetails: makeSelectVideoDetails(),
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

const withReducer = injectReducer({ key: 'videoDetails', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(VideoDetails));
