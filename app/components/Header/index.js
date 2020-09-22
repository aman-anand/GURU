/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Header
 *
 */

import React, { memo, Fragment } from 'react';
import withSizes from 'react-sizes';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import history from '../../utils/history';
import { isUserAlreadyLogin } from '../../dataService/Login';
// import styled from 'styled-components';
import logoIMG from '../../images/logo.svg';
import hemburger from '../../images/hemburger.png';
import { HeaderContainer } from './style';
const closeNavigate = () => {
  const element = document.getElementById('mobileNavigation');
  element.classList.remove('active');
};
const openNavigate = () => {
  const element = document.getElementById('mobileNavigation');
  element.classList.add('active');
};

export const listCompo = props => {
  const { isMobile } = props || {};
  const { pathname } = window.location;
  const pathMatch = pathname.indexOf('courses/') > -1;
  // console.log('pathname', pathname);
  return (
    <ul className="navList">
      {isMobile ? (
        <li>
          <span onClick={() => closeNavigate()} role="presentation">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.41003 1.42L2.83003 6L7.41003 10.59L6.00003 12L3.38077e-05 6L6.00003 1.23266e-07L7.41003 1.42Z"
                fill="#403F3F"
              />
            </svg>
          </span>
        </li>
      ) : null}
      <li>
        <Link
          to="/home"
          className={`${['/home'].includes(pathname) ? 'active' : null}`}
          role="presentation"
        >
          <i className="icon">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L16 6V18H11V11H5V18H0V6L8 0Z" fill="#403F3F" />
            </svg>
          </i>
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link
          to="/course"
          className={`${
            ['/course'].includes(pathname) || pathMatch ? 'active' : null
          }`}
          role="presentation"
        >
          <i className="icon">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6 18C13.0774 18 13.5352 17.8104 13.8728 17.4728C14.2104 17.1352 14.4 16.6774 14.4 16.2V1.8C14.4 0.801 13.59 0 12.6 0H7.2V6.3L4.95 4.95L2.7 6.3V0H1.8C1.32261 0 0.864773 0.189642 0.527208 0.527208C0.189642 0.864773 0 1.32261 0 1.8V16.2C0 16.6774 0.189642 17.1352 0.527208 17.4728C0.864773 17.8104 1.32261 18 1.8 18H12.6Z"
                fill="#403F3F"
              />
            </svg>
          </i>
          <span>Courses</span>
        </Link>
      </li>
      <li>
        <Link
          to="/sessions"
          className={`${['/sessions'].includes(pathname) ? 'active' : null}`}
          role="presentation"
        >
          <i className="icon">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 18H2V7H16V18ZM13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 2.89 17.1 2 16 2H15V0H13ZM14 11H9V16H14V11Z"
                fill="#403F3F"
              />
            </svg>
          </i>
          <span>Upcoming Sessions</span>
        </Link>
      </li>
      <li>
        <Link
          to="/sessions"
          className={`${['/sessions'].includes(pathname) ? 'active' : null}`}
          role="presentation"
        >
          <i className="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                fill="#403F3F"
              />
            </svg>
          </i>
          <span>ATTENDED SESSIONS</span>
        </Link>
      </li>
      {isMobile ? (
        <Fragment>
          <li>
            <Link
              to="/sessions"
              className={`${
                ['/sessions'].includes(pathname) ? 'active' : null
              }`}
              role="presentation"
            >
              <i className="icon">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0C0.89 0 0 0.89 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H10V19L13 16L16 19V14H18C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12V5V3V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H14H2ZM10 2L13 4L16 2V5.5L19 7L16 8.5V12L13 10L10 12V8.5L7 7L10 5.5V2ZM2 2H7V4H2V2ZM2 6H5V8H2V6ZM2 10H7V12H2V10Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
              <span>Certificate</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sessions"
              className={`${
                ['/sessions'].includes(pathname) ? 'active' : null
              }`}
              role="presentation"
            >
              <i className="icon">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16V4.8H3.11111V16H0ZM5.44444 16V0H8.55556V16H5.44444ZM10.8889 16V9.6H14V16H10.8889Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
              <span>LEADERBOARD</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sessions"
              className={`${
                ['/sessions'].includes(pathname) ? 'active' : null
              }`}
              role="presentation"
            >
              <i className="icon">
                <svg
                  width="24"
                  height="15"
                  viewBox="0 0 24 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4V0L18 7L11 14V9.9C6 9.9 2.5 11.5 0 15C1 10 4 5 11 4ZM17 3V0L24 7L17 14V11L21 7L17 3Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
              <span>REFER A FRIEND</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sessions"
              className={`${
                ['/sessions'].includes(pathname) ? 'active' : null
              }`}
              role="presentation"
            >
              <i className="icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4 1.6V7.2H2.536L1.6 8.136V1.6H10.4ZM11.2 0H0.8C0.587827 0 0.384344 0.0842854 0.234315 0.234315C0.0842854 0.384344 0 0.587827 0 0.8V12L3.2 8.8H11.2C11.4122 8.8 11.6157 8.71571 11.7657 8.56569C11.9157 8.41566 12 8.21217 12 8V0.8C12 0.587827 11.9157 0.384344 11.7657 0.234315C11.6157 0.0842854 11.4122 0 11.2 0ZM15.2 3.2H13.6V10.4H3.2V12C3.2 12.2122 3.28429 12.4157 3.43431 12.5657C3.58434 12.7157 3.78783 12.8 4 12.8H12.8L16 16V4C16 3.78783 15.9157 3.58434 15.7657 3.43431C15.6157 3.28429 15.4122 3.2 15.2 3.2Z"
                    fill="#2E323D"
                  />
                </svg>
              </i>
              <span>CHAT WITH GURU</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sessions"
              className={`${
                ['/sessions'].includes(pathname) ? 'active' : null
              }`}
              role="presentation"
            >
              <i className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H6V19C6 19.6 6.4 20 7 20H7.5C7.7 20 8 19.9 8.2 19.7L11.9 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9 11H5V6.8L6.3 4H8.3L6.9 7H9V11ZM15 11H11V6.8L12.3 4H14.3L12.9 7H15V11Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
              <span>FEEDBACK</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sessions"
              className={`${
                ['/sessions'].includes(pathname) ? 'active' : null
              }`}
              role="presentation"
            >
              <i className="icon">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C15.7956 6 16.5587 5.68393 17.1213 5.12132C17.6839 4.55871 18 3.79565 18 3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0C14.2044 0 13.4413 0.316071 12.8787 0.87868C12.3161 1.44129 12 2.20435 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10C0 10.7956 0.316071 11.5587 0.87868 12.1213C1.44129 12.6839 2.20435 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.34C12.11 16.55 12.08 16.77 12.08 17C12.08 18.61 13.39 19.91 15 19.91C16.61 19.91 17.92 18.61 17.92 17C17.92 16.2256 17.6124 15.4829 17.0648 14.9352C16.5171 14.3876 15.7744 14.08 15 14.08Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
              <span>SHARE</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sessions"
              className={`${
                ['/sessions'].includes(pathname) ? 'active' : null
              }`}
              role="presentation"
            >
              <i className="icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00204 12.15C8.14318 12.15 7.31948 11.8181 6.71217 11.2274C6.10486 10.6366 5.76368 9.83543 5.76368 9C5.76368 8.16457 6.10486 7.36335 6.71217 6.77261C7.31948 6.18187 8.14318 5.85 9.00204 5.85C9.86091 5.85 10.6846 6.18187 11.2919 6.77261C11.8992 7.36335 12.2404 8.16457 12.2404 9C12.2404 9.83543 11.8992 10.6366 11.2919 11.2274C10.6846 11.8181 9.86091 12.15 9.00204 12.15ZM15.8766 9.873C15.9136 9.585 15.9414 9.297 15.9414 9C15.9414 8.703 15.9136 8.406 15.8766 8.1L17.8289 6.633C18.0047 6.498 18.051 6.255 17.9399 6.057L16.0894 2.943C15.9784 2.745 15.7286 2.664 15.525 2.745L13.2212 3.645C12.74 3.294 12.2404 2.988 11.6575 2.763L11.3152 0.378C11.2782 0.162 11.0839 0 10.8525 0H7.15155C6.92024 0 6.72593 0.162 6.68892 0.378L6.34658 2.763C5.76368 2.988 5.26404 3.294 4.78291 3.645L2.47905 2.745C2.27549 2.664 2.02567 2.745 1.91464 2.943L0.0641489 6.057C-0.0561333 6.255 -0.000618345 6.498 0.175179 6.633L2.12745 8.1C2.09044 8.406 2.06268 8.703 2.06268 9C2.06268 9.297 2.09044 9.585 2.12745 9.873L0.175179 11.367C-0.000618345 11.502 -0.0561333 11.745 0.0641489 11.943L1.91464 15.057C2.02567 15.255 2.27549 15.327 2.47905 15.255L4.78291 14.346C5.26404 14.706 5.76368 15.012 6.34658 15.237L6.68892 17.622C6.72593 17.838 6.92024 18 7.15155 18H10.8525C11.0839 18 11.2782 17.838 11.3152 17.622L11.6575 15.237C12.2404 15.003 12.74 14.706 13.2212 14.346L15.525 15.255C15.7286 15.327 15.9784 15.255 16.0894 15.057L17.9399 11.943C18.051 11.745 18.0047 11.502 17.8289 11.367L15.8766 9.873Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
              <span>SETTINGS</span>
            </Link>
          </li>
          <li>
            <a role="presentation" onClick={() => logOut()}>
              <i className="icon">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 15V12H6V8H13V5L18 10L13 15ZM11 0C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V4H11V2H2V18H11V16H13V18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H11Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
              <span>LOGOUT</span>
            </a>
          </li>
        </Fragment>
      ) : null}
    </ul>
  );
};

const logOut = () => {
  window.localStorage.clear();
  history.push('/signin');
};
function Header(props) {
  const { isMobile, title } = props || {};
  return (
    <HeaderContainer>
      <div className="logoBox">
        {!isMobile ? (
          <img src={logoIMG} alt="" title="" />
        ) : (
          <div
            className="menu"
            onClick={() => openNavigate()}
            role="presentation"
          >
            <img src={hemburger} alt="" title="" />
          </div>
        )}
      </div>
      <div className="navListBox">{!isMobile ? listCompo(props) : title}</div>
      <div className="navRight">
        {isUserAlreadyLogin() && !isMobile ? (
          <Fragment>
            <div className="chart">
              <i>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4 1.6V7.2H2.536L1.6 8.136V1.6H10.4ZM11.2 0H0.8C0.587827 0 0.384344 0.0842854 0.234315 0.234315C0.0842854 0.384344 0 0.587827 0 0.8V12L3.2 8.8H11.2C11.4122 8.8 11.6157 8.71571 11.7657 8.56569C11.9157 8.41566 12 8.21217 12 8V0.8C12 0.587827 11.9157 0.384344 11.7657 0.234315C11.6157 0.0842854 11.4122 0 11.2 0ZM15.2 3.2H13.6V10.4H3.2V12C3.2 12.2122 3.28429 12.4157 3.43431 12.5657C3.58434 12.7157 3.78783 12.8 4 12.8H12.8L16 16V4C16 3.78783 15.9157 3.58434 15.7657 3.43431C15.6157 3.28429 15.4122 3.2 15.2 3.2Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
            </div>
            <div className="myProfileNav">
              <div className="proIcon" />
              <div className="proName">
                <p>
                  <span>Rajiv Shukla</span>
                  <span>Roll No: 00274</span>
                </p>
              </div>
              <i className="arrow" />
            </div>
          </Fragment>
        ) : (
          <i className="notifyIcon">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15H4V8.5C4 6 6 4 8.5 4C11 4 13 6 13 8.5V15ZM15 14V8.5C15 5.43 12.86 2.86 10 2.18V1.5C10 1.10218 9.84196 0.720644 9.56066 0.43934C9.27936 0.158035 8.89782 0 8.5 0C8.10218 0 7.72064 0.158035 7.43934 0.43934C7.15804 0.720644 7 1.10218 7 1.5V2.18C4.13 2.86 2 5.43 2 8.5V14L0 16V17H17V16L15 14ZM8.5 20C9.03043 20 9.53914 19.7893 9.91421 19.4142C10.2893 19.0391 10.5 18.5304 10.5 18H6.5C6.5 18.5304 6.71071 19.0391 7.08579 19.4142C7.46086 19.7893 7.96957 20 8.5 20Z"
                fill="#403F3F"
              />
            </svg>
          </i>
        )}
      </div>
      {isMobile ? (
        <aside className="sideNavWrapper" id="mobileNavigation">
          <div className="navListWrap">{listCompo(props)}</div>
          <div
            className="outNavList"
            onClick={() => closeNavigate()}
            role="presentation"
          />
        </aside>
      ) : null}
    </HeaderContainer>
  );
}

Header.propTypes = {};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(Header));
