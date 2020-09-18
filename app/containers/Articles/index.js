/**
 *
 * Articles
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withSizes from 'react-sizes';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectArticles from './selectors';
import reducer from './reducer';
import { articlesAction } from './actions';

// NOTE: Styles
import { HomeContainer } from '../Home/style';
import Header from '../../components/Header/Loadable';
import Search from '../../components/Search/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import ArticleCard from '../../components/ArticleCard/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class Articles extends React.PureComponent {
  componentDidMount() {
    const paramOBJ = {
      page: 1,
      limit: 10,
      all: true,
    };
    this.props.dispatch(articlesAction(paramOBJ));
  }

  render() {
    const { articles, isMobile } = this.props;
    const { data: parendData } = articles || {};
    const { data: article, total: articleList } = parendData || {};
    return (
      <HomeContainer>
        <Helmet>
          <title>Articles</title>
          <meta name="description" content="Description of Articles" />
        </Helmet>
        <Header title="Articles" />
        <div className="container">
          {isMobile ? <Search /> : null}
          <div className="leftBox">
            <UpcommingSession title="ARTICLES" subtitle={`${articleList} articles listed`} />
            <div className="cardWrapper row">
              {article &&
                article.map(list => {
                  const { img, title, _id } = list || {};
                  const dataOBJ = {
                    title,
                    img,
                    _id,
                  };
                  return <ArticleCard key={_id} dataOBJ={dataOBJ} />;
                })}
            </div>
          </div>
        </div>
      </HomeContainer>
    );
  }
}

Articles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  articles: PropTypes.object,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  articles: makeSelectArticles(),
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

const withReducer = injectReducer({ key: 'articles', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(Articles));
