/**
 *
 * ShishyaHome
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
import makeSelectShishyaHome from './selectors';
import reducer from './reducer';
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
  render() {
    const { isMobile } = this.props || {};
    return (
      <HomeContainer>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Header title="Home" />
        <div className="container">
          {isMobile ? <Search /> : null}
          <div className="leftBox">
            {isMobile ? (
              <UpcommingSession title="Upcoming Sessions" subtitle="15 sessions aligned" seeall />
            ) : (
              <UpcommingSession button title="Upcoming Sessions" subtitle="15 sessions aligned" />
            )}
            <div className="cardWrapper">
              <SessionCard sticyOne />
              <SessionCard sticyOne />
              <SessionCard sticyOne />
            </div>
            {isMobile ? (
              <UpcommingSession title="Articles" subtitle="22 article listed" seeall />
            ) : (
              <UpcommingSession button title="Articles" subtitle="22 article listed" />
            )}
            <div className="cardWrapper">
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </div>
            {isMobile ? (
              <UpcommingSession title="Videos" subtitle="21 Videos listed" seeall />
            ) : (
              <UpcommingSession button title="Videos" subtitle="21 Videos listed" />
            )}
            <div className="cardWrapper">
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
        </div>
        {isMobile ? <Footer /> : null}
      </HomeContainer>
    );
  }
}

ShishyaHome.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const mapStateToProps = createStructuredSelector({
  shishyaHome: makeSelectShishyaHome(),
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
