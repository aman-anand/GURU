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
import VideoCard from '../../components/VideoCard/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class Videos extends React.PureComponent {
  componentDidMount() {
    const paramOBJ = {
      page: 1,
      limit: 10,
      all: true,
    };
    this.props.dispatch(articlesAction(paramOBJ));
  }

  render() {
    const { isMobile, videos } = this.props;
    const { data: parendData } = videos || {};
    const { data: video, total: videoList } = parendData || {};
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
            <UpcommingSession title="VIDEOS" subtitle={`${videoList} videos listed`} />
            <div className="cardWrapper">
              {video &&
                video.map(item => {
                  const { name, thumb, _id } = item || {};
                  const dataOBJ = {
                    title: name,
                    thumb,
                    _id,
                  };
                  return <VideoCard key={_id} dataOBJ={dataOBJ} />;
                })}
            </div>
          </div>
        </div>
      </HomeContainer>
    );
  }
}

Videos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  videos: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  videos: makeSelectArticles(),
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

const withReducer = injectReducer({ key: 'videos', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(Videos));
