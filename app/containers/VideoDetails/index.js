/**
 *
 * VideoDetails
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import injectReducer from 'utils/injectReducer';
import makeSelectVideoDetails from './selectors';
import reducer from '../Videos/reducer';
import Header from '../../components/Header/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
import VideoPlayer from '../../components/VideoPlayer/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import VideoCard from '../../components/VideoCard/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';

// NOTE: Style
import { VideoDetailsContainer } from './style';
export class VideoDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMobile } = this.props || {};
    return (
      <VideoDetailsContainer>
        <Helmet>
          <title>VideoDetails</title>
          <meta name="description" content="Description of VideoDetails" />
        </Helmet>
        {!isMobile ? (
          <Header title="COURSE DETAILS" />
        ) : (
          <OptionalHeader title="VIDEO DETAILS" goTo="/videos" />
        )}
        <div className="container">
          <div className="leftBox">
            <VideoPlayer />
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
      </VideoDetailsContainer>
    );
  }
}

VideoDetails.propTypes = {
  // dispatch: PropTypes.func.isRequired,
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
