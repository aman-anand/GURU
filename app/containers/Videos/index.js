/**
 *
 * Videos
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import injectReducer from 'utils/injectReducer';
import makeSelectVideos from './selectors';
import reducer from './reducer';
import { videosAction } from './actions';

// NOTE: style
import { HomeContainer } from '../Home/style';
import Header from '../../components/Header/Loadable';
import Search from '../../components/Search/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import VideoCard from '../../components/VideoCard/Loadable';
import OptionalHeader from '../../components/OptionalHeader';

export class Videos extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const paramOBJ = {
      page: 1,
      limit: 10,
      all: true,
    };
    this.props.dispatch(videosAction(paramOBJ));
  }

  render() {
    const { isMobile, videos } = this.props;
    const { data: parentData } = videos || {};
    const { data: video, total: videoList } = parentData || {};
    return (
      <HomeContainer>
        <Helmet>
          <title>Videos</title>
          <meta name="description" content="Description of Videos" />
        </Helmet>
        {!isMobile ? (
          <Header title="VIDEOS" />
        ) : (
          <OptionalHeader title="VIDEOS" goTo="/home" />
        )}
        {isMobile ? <Search /> : null}
        <div className="container">
          <div className="leftBox">
            <UpcommingSession
              title="VIDEOS"
              subtitle={`${videoList} videos listed`}
            />
            <div className="cardWrapper">
              {video &&
                video.map(item => {
                  const { name, thumb, _id } = item || {};
                  const dataOBJ = {
                    name,
                    thumb,
                    _id,
                  };
                  return (
                    <Fragment>
                      {name && name.length > 1 ? (
                        <VideoCard key={_id} dataOBJ={dataOBJ} />
                      ) : null}
                    </Fragment>
                  );
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
  videos: PropTypes.object,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  videos: makeSelectVideos(),
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
  memo,
)(withSizes(mapSizesToProps)(Videos));
