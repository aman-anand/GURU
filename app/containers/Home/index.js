/**
 *
 * Home
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
import makeSelectHome from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import Search from '../../components/Search/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import ListCard from '../../components/ListCard/Loadable';
import { HomeContainer } from './style';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.PureComponent {
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
            {isMobile ? <UpcommingSession seeall /> : <UpcommingSession button />}
            <div className="cardWrapper">
              <SessionCard />
              <SessionCard />
            </div>
            <div className="cardWrapper">
              <ListCard />
              <ListCard />
            </div>
          </div>
          <div className="rightBox">
            <div className="attendanceUpdates">
              <p className="_sessionBox">
                <span>ATTENDANCE UPDATES</span>
                <span>Start day initiated</span>
              </p>
            </div>
          </div>
        </div>
        {isMobile ? <Footer /> : null}
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired,
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
)(withSizes(mapSizesToProps)(Home));
