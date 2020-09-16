/**
 *
 * Courses
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
import makeSelectCourses from './selectors';
import reducer from './reducer';
import { courseAction } from './actions';
import Header from '../../components/Header/Loadable';
import Search from '../../components/Search/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import { HomeContainer } from '../Home/style';

/* eslint-disable react/prefer-stateless-function */
export class Courses extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const paramOBJ = {
      page: 1,
      limit: 10,
      status: 0,
      all: true,
    };
    this.props.dispatch(courseAction(paramOBJ));
  }

  render() {
    const { isMobile, courses } = this.props;
    const { courseObj } = courses || {};
    const { data, total } = courseObj || {};
    return (
      <HomeContainer>
        <Helmet>
          <title>Courses</title>
          <meta name="description" content="Description of Courses" />
        </Helmet>
        <Header title="Courses" />
        <div className="container">
          {isMobile ? <Search /> : null}
          <div className="leftBox">
            <UpcommingSession title="COURSES" subtitle={`${total} courses listed`} />
            <div className="cardWrapper">
              {data &&
                data.map(list => {
                  const { name, sections, duration, totalVideos, coverImage, _id } = list || {};
                  const courseData = {
                    courseName: name,
                    totalSections: sections ? sections.length : 0,
                    totalVideos,
                    duration,
                    coverImage,
                    _id,
                  };
                  const sticyTwoData = { name: `${sections ? sections.length : 0} SECTIONS`, classname: 'expert' };
                  return <SessionCard courseData={courseData} sticyTwo sticyTwoData={sticyTwoData} />;
                })}
            </div>
          </div>
        </div>
      </HomeContainer>
    );
  }
}

Courses.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  courses: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  courses: makeSelectCourses(),
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

const withReducer = injectReducer({ key: 'courses', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(Courses));
