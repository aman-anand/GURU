/* eslint-disable no-param-reassign */
/**
 *
 * ArticleDetails
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
import makeSelectArticleDetails from './selectors';
import reducer from '../Articles/reducer';
import Header from '../../components/Header/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
import SessionCard from '../../components/SessionCard/Loadable';
import SectionHeading from '../../components/SectionHeading/Loadable';
import ArticleBlock from '../../components/ArticleBlock/Loadable';
import { courseAction, articlesDetailsAction } from '../Articles/actions';
// NOTE: Style
import { ArticleDetailsContainer } from './style';

export class ArticleDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    const { match } = props || {};
    const { params } = match || {};
    const { articlesId: ARTICLE_ID } = params || {};
    state.ARTICLE_ID = ARTICLE_ID || null; // Set videosId
    return null;
  }

  componentDidMount() {
    const { ARTICLE_ID } = this.state;
    const parms = {
      page: 1,
      limit: 4,
      status: 0,
      all: true,
    };
    const paramOBJ = {
      ARTICLE_ID,
    };
    this.props.dispatch(courseAction(parms));
    this.props.dispatch(articlesDetailsAction(paramOBJ));
  }

  render() {
    const { isMobile, articleDetails } = this.props || {};
    const { courseObj, details } = articleDetails || {};
    const { data: courseData } = courseObj || {};
    const firstArticles = details[0] || [];
    const { title, data, readingTime, img, data: descData } =
      firstArticles || {};
    const firstDes = descData ? descData[0] : {};
    const { body } = firstDes || {};
    return (
      <ArticleDetailsContainer>
        <Helmet>
          <title>ArticleDetails</title>
          <meta name="description" content="Description of ArticleDetails" />
        </Helmet>
        {!isMobile ? (
          <Header title="DOCUMENTS" />
        ) : (
          <OptionalHeader title="DOCUMENTS" goTo="/articles" />
        )}
        <div className="container">
          <div className="leftBox">
            <ArticleBlock data={{ title, readingTime, img, data }} />
            <div
              className="articleDesc"
              dangerouslySetInnerHTML={{ __html: body }}
            />
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
      </ArticleDetailsContainer>
    );
  }
}

ArticleDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const mapStateToProps = createStructuredSelector({
  articleDetails: makeSelectArticleDetails(),
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
const withReducer = injectReducer({ key: 'articleDetails', reducer });

export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(ArticleDetails));
