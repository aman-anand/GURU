/**
 *
 * GuruCoursesDetails
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { GuruCoursesDetailsContainer } from './style';
import makeSelectGuruCoursesDetails from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import Search from '../../components/Search/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import VideoCard from '../../components/VideoCard/Loadable';
import Bredcrumb from '../../components/Bredcrumb/Loadable';
import VideoPlayer from '../../components/VideoPlayer/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class GuruCoursesDetails extends React.PureComponent {
  render() {
    const { isMobile } = this.props || {};
    return (
      <GuruCoursesDetailsContainer>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Header title="Home" />
        <div className="container">
          {isMobile ? <Search /> : null}
          <div className="leftBox">
            <Bredcrumb>
              <div className="_bWrapper">
                <span>
                  <a href="#">COURSES</a>
                </span>
                <span>&gt;</span>
                <span>
                  <a href="#">SAVINGS EDUCATION</a>
                </span>
                <span>&gt;</span>
                <span>
                  <a href="#">BRIEF</a>
                </span>
              </div>
            </Bredcrumb>
            <VideoPlayer />
          </div>
          <div className="rightBox">
            <SectionHeading title="Other INTERESTING COURSES" />
            <div className="cardWrapper">
              <SessionCard sticyTwo sticyTwoData={{ name: '3 SECTIONS', classname: 'expert' }} />
              <SessionCard sticyTwo sticyTwoData={{ name: 'BEGINNER', classname: 'beginner' }} />
            </div>
            <SectionHeading class_name="marginTop" title="Other INTERESTING VIDEOS" />
            <div className="cardWrapper">
              <VideoCard />
              <VideoCard />
            </div>
          </div>
        </div>
        {isMobile ? <Footer /> : null}
      </GuruCoursesDetailsContainer>
    );
  }
}

GuruCoursesDetails.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  guruCoursesDetails: makeSelectGuruCoursesDetails(),
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

const withReducer = injectReducer({ key: 'guruCoursesDetails', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(GuruCoursesDetails));
