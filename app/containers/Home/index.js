/**
 *
 * Home
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
import Slider from 'react-slick';
import makeSelectHome from './selectors';
import reducer from './reducer';
import { homeAction } from './actions';
import {
  getFromLocalStore,
  languageString,
} from '../../services/CommonSetterGetter';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import Search from '../../components/Search/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import VideoCard from '../../components/VideoCard/Loadable';
import ArticleCard from '../../components/ArticleCard/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import ChartBord from '../../components/ChartBord/Loadable';

// NOTE: Styles
import { HomeContainer } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class Home extends React.PureComponent {
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
    const { isMobile, home } = this.props || {};
    const { data } = home || {};
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
        {isMobile ? <Search /> : null}
        <div className="container">
          <div className="leftBox">
            {/* NOTE: COURSE */}
            <UpcommingSession
              title={languageString('txt_courses').toUpperCase()}
              subtitle={`${courseList} ${languageString('txt_courses_listed')}`}
              seeall={!!isMobile}
              seelLink="/course"
            />
            {!isMobile && courseList <= 3 ? (
              <div className="cardWrapper row">
                {course &&
                  course.map(item => {
                    const {
                      name,
                      totalSections,
                      duration,
                      totalVideos,
                      coverImage,
                      _id,
                    } = item || {};
                    const courseData = {
                      courseName: name,
                      totalSections,
                      totalVideos,
                      duration,
                      coverImage,
                      _id,
                    };
                    const sticyTwoData = {
                      name: `${totalSections} ${languageString(
                        'txt_showcase_section_title',
                      ).toUpperCase()}`,
                      classname: 'expert',
                    };
                    return (
                      <SessionCard
                        courseData={courseData}
                        sticyTwo
                        sticyTwoData={sticyTwoData}
                      />
                    );
                  })}
              </div>
            ) : (
              <div className="carosuleWrapper">
                <Slider {...settingsCourse}>
                  {course &&
                    course.map(list => {
                      const {
                        name,
                        totalSections,
                        duration,
                        totalVideos,
                        coverImage,
                        _id,
                      } = list || {};
                      const courseData = {
                        courseName: name,
                        totalSections,
                        totalVideos,
                        duration,
                        coverImage,
                        _id,
                      };
                      const sticyTwoData = {
                        name: `${totalSections} SECTIONS`,
                        classname: 'expert',
                      };
                      return (
                        <SessionCard
                          courseData={courseData}
                          sticyTwo
                          sticyTwoData={sticyTwoData}
                        />
                      );
                    })}
                </Slider>
              </div>
            )}
            {/* NOTE: VIDEOS  */}
            {videoList ? (
              <UpcommingSession
                title={languageString('txt_videos').toUpperCase()}
                subtitle={`${videoList} ${languageString('txt_videos_listed')}`}
                seeall={!!isMobile}
                seelLink="/videos"
              />
            ) : null}
            {!isMobile && videoList <= 3 ? (
              <div className="cardWrapper row">
                {video &&
                  video.map(item => {
                    const { name, thumb, _id } = item || {};
                    const dataOBJ = {
                      name,
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
                      const { name, thumb, _id } = item || {};
                      const dataOBJ = {
                        name,
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
              <UpcommingSession
                title={languageString('txt_articles').toUpperCase()}
                subtitle={`${articleList} ${languageString(
                  'txt_articles_listed',
                ).toUpperCase()}`}
                seeall={!!isMobile}
                seelLink="/articles"
              />
            ) : null}
            {!isMobile && articleList <= 3 ? (
              <div className="cardWrapper row">
                {article &&
                  article.map(list => {
                    const { img, title, _id, readingTime } = list || {};
                    const dataOBJ = {
                      title,
                      img,
                      _id,
                      readingTime,
                    };
                    return <ArticleCard dataOBJ={dataOBJ} />;
                  })}
              </div>
            ) : (
              <div className="carosuleWrapper">
                <Slider {...settingsArticle}>
                  {article &&
                    article.map(list => {
                      const { img, title, _id, readingTime } = list || {};
                      const dataOBJ = {
                        title,
                        img,
                        _id,
                        readingTime,
                      };
                      return <ArticleCard dataOBJ={dataOBJ} />;
                    })}
                </Slider>
              </div>
            )}
          </div>
        </div>
        <ChartBord />
        {isMobile ? <Footer /> : null}
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
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

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Home));
