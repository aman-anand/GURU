/**
 *
 * GuruCourses
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
import makeSelectGuruCourses from './selectors';
import reducer from './reducer';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import Search from '../../components/Search/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import { HomeContainer } from '../Home/style';

/* eslint-disable react/prefer-stateless-function */
export class GuruCourses extends React.PureComponent {
  render() {
    const { isMobile } = this.props || {};
    return (
      <HomeContainer>
        <Helmet>
          <title>GuruCourses</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Header title="Courses" />
        <div className="container">
          {isMobile ? <Search /> : null}
          <div className="leftBox">
            <UpcommingSession title="COURSES" subtitle="10 courses listed" />
            <div className="cardWrapper">
              <SessionCard sticyTwo sticyTwoData={{ name: '3 SECTIONS', classname: 'expert' }} />
              <SessionCard sticyTwo sticyTwoData={{ name: 'BEGINNER', classname: 'beginner' }} />
              <SessionCard sticyTwo sticyTwoData={{ name: 'INTERMEDIATE', classname: 'intermediate' }} />
            </div>
            <div className="cardWrapper">
              <SessionCard sticyTwo />
              <SessionCard sticyTwo />
              <SessionCard sticyTwo />
            </div>
            <div className="cardWrapper">
              <SessionCard sticyTwo />
              <SessionCard sticyTwo />
              <SessionCard sticyTwo />
            </div>
          </div>
        </div>
        {isMobile ? <Footer /> : null}
      </HomeContainer>
    );
  }
}

GuruCourses.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  guruCourses: makeSelectGuruCourses(),
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

const withReducer = injectReducer({ key: 'guruCourses', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(GuruCourses));
