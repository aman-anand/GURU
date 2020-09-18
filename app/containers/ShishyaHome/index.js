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
import Slider from 'react-slick';

import injectReducer from 'utils/injectReducer';
import { makeSelectShishyaHome, makeSelectLoginDomain } from './selectors';
import reducer from '../Home/reducer';
import { homeAction } from '../Home/actions';
import { getFromLocalStore } from '../../services/CommonSetterGetter';
import Header from '../../components/Header/Loadable';
// import Footer from '../../components/Footer/Loadable';
import Search from '../../components/Search/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import VideoCard from '../../components/VideoCard/Loadable';
import ArticleCard from '../../components/ArticleCard/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import { HomeContainer } from '../Home/style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    const courseList = course ? course.length : 0;
    const videoList = video ? video.length : 0;
    const articleList = article ? article.length : 0;
    const settingsCourse = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: courseList < 3 ? courseList : 3,
      slidesToScroll: courseList < 3 ? courseList : 3,
      arrows: !isMobile,
      nextArrow: <span>NEXT</span>,
      prevArrow: <span>PREVIOUS</span>,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    const settingsVideos = {
      ...settingsCourse,
      slidesToShow: videoList < 4 ? videoList : 4,
      slidesToScroll: videoList < 4 ? videoList : 4,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
      ],
    };
    const settingsArticle = {
      ...settingsCourse,
      slidesToShow: articleList < 4 ? articleList : 4,
      slidesToScroll: articleList < 4 ? articleList : 4,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
      ],
    };
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
            <UpcommingSession title="COURSES" subtitle={`${courseList} courses listed`} seeall={!!isMobile} seelLink="/courses" />
            {!isMobile && courseList <= 3 ? (
              <div className="cardWrapper row">
                {course &&
                  course.map(item => {
                    const { name, totalSections, duration, totalVideos, coverImage, _id } = item || {};
                    const courseData = {
                      courseName: name,
                      totalSections,
                      totalVideos,
                      duration,
                      coverImage,
                      _id,
                    };
                    const sticyTwoData = { name: `${totalSections} SECTIONS`, classname: 'expert' };
                    return <SessionCard courseData={courseData} sticyTwo sticyTwoData={sticyTwoData} />;
                  })}
              </div>
            ) : (
              <div className="carosuleWrapper">
                <Slider {...settingsCourse}>
                  {course &&
                    course.map(list => {
                      const { name, totalSections, duration, totalVideos, coverImage, _id } = list || {};
                      const courseData = {
                        courseName: name,
                        totalSections,
                        totalVideos,
                        duration,
                        coverImage,
                        _id,
                      };
                      const sticyTwoData = { name: `${totalSections} SECTIONS`, classname: 'expert' };
                      return <SessionCard courseData={courseData} sticyTwo sticyTwoData={sticyTwoData} />;
                    })}
                </Slider>
              </div>
            )}
            {/* NOTE: VIDEOS  */}
            {videoList ? <UpcommingSession title="VIDEOS" subtitle={`${videoList} videos listed`} seeall={!!isMobile} seelLink="/videos" /> : null}
            {!isMobile && videoList <= 3 ? (
              <div className="cardWrapper row">
                {video &&
                  video.map(item => {
                    const { title, thumb, _id } = item || {};
                    const dataOBJ = {
                      title,
                      thumb,
                      _id,
                    };
                    return <VideoCard dataOBJ={dataOBJ} />;
                  })}
              </div>
            ) : (
              <div className="carosuleWrapper">
                <Slider {...settingsVideos}>
                  {video &&
                    video.map(item => {
                      const { title, thumb, _id } = item || {};
                      const dataOBJ = {
                        title,
                        thumb,
                        _id,
                      };
                      return <VideoCard dataOBJ={dataOBJ} />;
                    })}
                </Slider>
              </div>
            )}
            {/* NOTE: ARTICLE  */}
            {articleList ? (
              <UpcommingSession title="ARTICLES" subtitle={`${articleList} articles listed`} seeall={!!isMobile} seelLink="/articles" />
            ) : null}
            {!isMobile && articleList <= 3 ? (
              <div className="cardWrapper row">
                {article &&
                  article.map(list => {
                    const { img, title, _id } = list || {};
                    const dataOBJ = {
                      title,
                      img,
                      _id,
                    };
                    return <ArticleCard dataOBJ={dataOBJ} />;
                  })}
              </div>
            ) : (
              <div className="carosuleWrapper">
                <Slider {...settingsArticle}>
                  {article &&
                    article.map(list => {
                      const { img, title, _id } = list || {};
                      const dataOBJ = {
                        title,
                        img,
                        _id,
                      };
                      return <ArticleCard dataOBJ={dataOBJ} />;
                    })}
                </Slider>
              </div>
            )}
          </div>
        </div>
        {/* {isMobile ? <Footer /> : null} */}
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
