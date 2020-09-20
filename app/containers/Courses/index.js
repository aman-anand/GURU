/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Courses
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withSizes from 'react-sizes';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCourses from './selectors';
// import { defaultAction } from './actions';
import { CoursesContainer } from './style';
import ProfileDetails from '../../components/ProfileDetails';
import DialogBox from '../../components/DialogBox';
import OrderList from '../../components/OrderList';
import reducer from './reducer';

const profileModalOpen = params => {
  const { props } = params;
  const { isMobile } = props;
  if (isMobile) {
    const element = document.getElementById('profileDialog');
    element.classList.add('active');
  }
};
export function Courses(props) {
  useInjectReducer({ key: 'courses', reducer });
  // useEffect(() => {
  //   props.dispatch(defaultAction());
  // }, []);
  window.console.log('PROPS', props);
  const [navigate, setSideNav] = useState('order');
  return (
    <div>
      <Helmet>
        <title>Courses</title>
        <meta name="description" content="Description of Courses" />
      </Helmet>
      <CoursesContainer>
        <div className="container">
          <div className="leftWrapper">
            <h2>Account Settings</h2>
            <ul>
              <li
                className={`${
                  !props.isMobile && ['profile'].includes(navigate)
                    ? 'active'
                    : null
                }`}
              >
                <div
                  onClick={() => {
                    if (props.isMobile) {
                      profileModalOpen({ props, name: 'profile' });
                    } else {
                      setSideNav('profile');
                    }
                  }}
                >
                  <i />
                  <p>
                    <span>Profile Details</span>
                    {props.isMobile ? (
                      <span>Persional info, Change passowrd</span>
                    ) : null}
                  </p>
                  {props.isMobile ? (
                    <i className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path
                          fill="#202c44"
                          fillRule="evenodd"
                          d="M6.45 5.55L7.5 4.5 12 9 7.5 13.5 6.45 12.45 9.9 9z"
                        />
                      </svg>
                    </i>
                  ) : null}
                </div>
              </li>
              {!props.isMobile ? (
                <li
                  className={`${
                    !props.isMobile && ['order'].includes(navigate)
                      ? 'active'
                      : null
                  }`}
                >
                  <div onClick={() => setSideNav('order')}>
                    <i />
                    <p>
                      <span>Order History</span>
                      {props.isMobile ? (
                        <span>Persional info, Change passowrd</span>
                      ) : null}
                    </p>
                    {props.isMobile ? (
                      <i className="arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#202c44"
                            fillRule="evenodd"
                            d="M6.45 5.55L7.5 4.5 12 9 7.5 13.5 6.45 12.45 9.9 9z"
                          />
                        </svg>
                      </i>
                    ) : null}
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="rightWrapper">
            {!props.isMobile && ['profile'].includes(navigate) ? (
              <ProfileDetails />
            ) : null}
            {['order'].includes(navigate) ? (
              <div className="orderHistoryContainer">
                <h4>Order History</h4>
                <OrderList />
                <OrderList />
              </div>
            ) : null}
          </div>
        </div>
        {props.isMobile ? (
          <DialogBox>
            <ProfileDetails />
          </DialogBox>
        ) : null}
      </CoursesContainer>
    </div>
  );
}

Courses.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // courses: PropTypes.object,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  courses: makeSelectCourses(),
});

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
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

export default compose(
  withConnect,
  memo,
)(withSizes(mapSizesToProps)(Courses));
