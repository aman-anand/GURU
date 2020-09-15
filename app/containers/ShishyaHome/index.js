/**
 *
 * ShishyaHome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { makeSelectShishyaHome, makeSelectLoginDomain } from './selectors';
import reducer from '../Home/reducer';
import { homeAction } from '../Home/actions';
import { getFromLocalStore } from '../../services/CommonSetterGetter';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import Search from '../../components/Search/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import VideoCard from '../../components/VideoCard/Loadable';
import ArticleCard from '../../components/ArticleCard/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import { HomeContainer } from '../Home/style';

/* eslint-disable react/prefer-stateless-function */
export class ShishyaHome extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = getFromLocalStore(['token', 'id', 'role', 'expires', 'phone']);
  }

  componentDidMount() {
    const { role } = this.store;
    if (role) {
      this.props.dispatch(homeAction({ type: role }));
    }
  }

  render() {
    const { isMobile, shishyaHome } = this.props || {};
    const { data } = shishyaHome || {};
    const { course, article, video } = data || {};
    const courseList = course.length;
    const videoList = video.length;
    const articleList = article.length;
    return (
      <HomeContainer>
        <Helmet>
          <title>Shishya Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Header title="Home" />
        <div className="container">
          {isMobile ? <Search /> : null}
          <div className="leftBox">
            {/* NOTE: COURSE */}
            {isMobile ? (
              <UpcommingSession title="COURSES" subtitle={`${courseList} courses listed`} seeall />
            ) : (
              <UpcommingSession button title="COURSES" subtitle={`${courseList} courses listed`} />
            )}
            <div className="cardWrapper">
              {course &&
                course.map(list => {
                  const { name, totalSections, duration, totalVideos, coverImage } = list || {};
                  const courseData = {
                    courseName: name,
                    totalSections,
                    totalVideos,
                    duration,
                    coverImage,
                  };
                  const sticyTwoData = { name: `${totalSections} SECTIONS`, classname: 'expert' };
                  return <SessionCard courseData={courseData} sticyTwo sticyTwoData={sticyTwoData} />;
                })}
            </div>
            {/* NOTE: VIDEOS  */}
            {isMobile ? (
              <UpcommingSession title="VIDEOS" subtitle={`${videoList} videos listed`} seeall />
            ) : (
              <UpcommingSession button title="VIDEOS" subtitle={`${videoList} videos listed`} />
            )}
            <div className="cardWrapper">
              {video &&
                video.map(item => {
                  const { title, thumb } = item || {};
                  const dataOBJ = {
                    title,
                    thumb,
                  };
                  return <VideoCard dataOBJ={dataOBJ} />;
                })}
            </div>
            {/* NOTE: ARTICLE  */}
            {isMobile ? (
              <UpcommingSession title="ARTICLES" subtitle={`${articleList} articles listed`} seeall />
            ) : (
              <UpcommingSession button title="ARTICLES" subtitle={`${articleList} articles listed`} />
            )}
            <div className="cardWrapper">
              {article &&
                article.map(list => {
                  const { img, title } = list || {};
                  const dataOBJ = {
                    title,
                    img,
                  };
                  return <ArticleCard dataOBJ={dataOBJ} />;
                })}
            </div>
          </div>
        </div>
        {isMobile ? <Footer /> : null}
      </HomeContainer>
    );
  }
}

ShishyaHome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const mapStateToProps = createStructuredSelector({
  shishyaHome: makeSelectShishyaHome(),
  login: makeSelectLoginDomain(),
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

const withReducer = injectReducer({ key: 'shishyaHome', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(ShishyaHome));
