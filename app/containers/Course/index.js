/**
 *
 * Course
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
import makeSelectCourse from './selectors';
import reducer from './reducer';
import { courseAction } from './actions';
import Header from '../../components/Header/Loadable';
import Search from '../../components/Search/Loadable';
import SessionCard from '../../components/SessionCard/Loadable';
import UpcommingSession from '../../components/UpcommingSession/Loadable';
import OptionalHeader from '../../components/OptionalHeader';
import { languageString } from '../../services/CommonSetterGetter';
// NOTE: Styles
import { HomeContainer } from '../Home/style';

export class Course extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const paramOBJ = {
      page: 1,
      limit: 10,
    };
    this.props.dispatch(courseAction(paramOBJ));
  }

  render() {
    const { isMobile, course } = this.props;
    const { courseObj } = course || {};
    const { data, total } = courseObj || {};
    return (
      <HomeContainer>
        <Helmet>
          <title>Courses</title>
          <meta name="description" content="Description of Courses" />
        </Helmet>
        {!isMobile ? (
          <Header title={languageString('txt_courses').toUpperCase()} />
        ) : (
          <OptionalHeader
            title={languageString('txt_courses').toUpperCase()}
            goTo="/home"
          />
        )}
        {isMobile ? (
          <Search placeHolder={languageString('txt_search_sessions')} />
        ) : null}
        <div className="container">
          <div className="leftBox">
            <UpcommingSession
              title={languageString('txt_courses').toUpperCase()}
              subtitle={`${total} ${languageString('txt_courses_listed')}`}
            />
            <div className="cardWrapper">
              {data &&
                data.map(list => {
                  const {
                    name,
                    sections,
                    duration,
                    totalVideos,
                    coverImage,
                    _id,
                  } = list || {};
                  const courseData = {
                    courseName: name,
                    totalSections: sections ? sections.length : 0,
                    totalVideos,
                    duration,
                    coverImage,
                    _id,
                  };
                  return <SessionCard key={_id} courseData={courseData} />;
                })}
            </div>
          </div>
        </div>
      </HomeContainer>
    );
  }
}

Course.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  course: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  course: makeSelectCourse(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'course', reducer });
export default compose(
  withReducer,
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Course));
