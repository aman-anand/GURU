/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Header
 *
 */

import React, { memo, Fragment, useState } from 'react';
import withSizes from 'react-sizes';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Link } from 'react-router-dom';
import history from '../../utils/history';
import { isUserAlreadyLogin } from '../../dataService/Login';
import { getFromLocalStore } from '../../services/CommonSetterGetter';
import Notification from '../Notification/Loadable';
import logoIMG from '../../images/logo.png';
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

const openChartBox = () => {
  document.getElementById('chartBoard').style.visibility = 'visible';
};
function Header(props) {
  const [open, setOpen] = useState(false);
  const listCompo = () => {
    const { isMobile } = props || {};
    const { pathname } = window.location;
    const pathMatch = pathname.indexOf('courses/') > -1;
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
        {isMobile ? (
          <Fragment>
            <li>
              <Link
                to="/videos"
                className={`${
                  ['/videos'].includes(pathname) ? 'active' : null
                }`}
                role="presentation"
              >
                <i className="icon">
                  <svg
                    width="20"
                    height="14"
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
                <span>Videos</span>
              </Link>
            </li>
            <li>
              <Link
                to="/upcomingsessions"
                className={`${
                  ['/upcomingsessions'].includes(pathname) ? 'active' : null
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
                to="/attendsessions"
                className={`${
                  ['/attendsessions'].includes(pathname) ? 'active' : null
                }`}
                role="presentation"
              >
                <i className="icon">
                  <svg
                    width="20"
                    height="14"
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
                <span>Attend Sessions</span>
              </Link>
            </li>
          </Fragment>
        ) : (
          <li>
            <Link
              to="/upcomingsessions"
              className={`${
                ['/upcomingsessions', '/attendsessions'].includes(pathname)
                  ? 'active'
                  : null
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
                    d="M16 18H2V7H16V18ZM13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 2.89 17.1 2 16 2H15V0H13ZM14 11H9V16H14V11Z"
                    fill="#403F3F"
                  />
                </svg>
              </i>
              <span>Sessions</span>
            </Link>
          </li>
        )}
        <li>
          <Link
            to="/certificate"
            className={`${
              ['/certificate'].includes(pathname) ? 'active' : null
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
        {isMobile ? (
          <Fragment>
            <li>
              <Link
                to="/leaderboard"
                className={`${
                  ['/leaderboard'].includes(pathname) ? 'active' : null
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
              <Link to="/chart" role="presentation">
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
              <Link to="/feedback" role="presentation">
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
              <Link to="/" role="presentation">
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
              <Link to="/setting" role="presentation">
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
  const { rollNumber, fName, lName, profileImage } =
    getFromLocalStore(['rollNumber', 'fName', 'lName', 'profileImage']) || {};
  const { isMobile, title } = props || {};
  const handleClose = () => {
    setOpen(false);
  };
  const handleSucess = () => {
    window.localStorage.clear();
    setOpen(false);
    history.push('/signin');
  };
  const logOut = () => {
    setOpen(true);
  };
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
      <div className="navListBox">
        {!isMobile ? listCompo(props, logOut) : title}
      </div>
      <div className="navRight">
        {isUserAlreadyLogin() && !isMobile ? (
          <Fragment>
            <div
              className="chart"
              onClick={() => openChartBox()}
              role="presentation"
            >
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
            <Notification />
            <div className="myProfileNav">
              <div className="proIcon">
                <img src={profileImage} alt="" title="" />
              </div>
              <div className="proName">
                <p>
                  <span>
                    {fName} {lName}
                  </span>
                  <span>Roll No: {rollNumber}</span>
                </p>
              </div>
              <i className="arrow">
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="#727B87"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <div className="profileMenu">
                <ul className="navList">
                  <li>
                    <Link to="/leaderboard" role="presentation">
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
                      <span>Leaderboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" role="presentation">
                      <i className="icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14ZM12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6ZM0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2C0.89 0 0 0.9 0 2Z"
                            fill="#403F3F"
                          />
                        </svg>
                      </i>
                      <span>Profile Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/feedback" role="presentation">
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
                      <span>Website Feedback</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/setting" role="presentation">
                      <i className="icon">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.87 8.7L0 5.484H1.074V0H10.742V1.518H2.53V5.484H3.604L1.87 8.7ZM13.016 7.476H11.27L14.5 0H15.794L18.994 7.484H17.226L16.56 5.84H13.66L13.016 7.476ZM14.216 4.44H16.016L15.112 2.086L14.216 4.44ZM4.5 12.1H5.408V14.566C5.19429 14.6739 4.95732 14.7274 4.718 14.722C4.45121 14.7176 4.19061 14.6409 3.964 14.5C3.8595 14.4091 3.74392 14.3318 3.62 14.27C3.82377 14.0737 3.98407 13.8368 4.09052 13.5746C4.19698 13.3124 4.24722 13.0308 4.238 12.748C4.238 11.49 3.438 10.646 2.238 10.646C1.87672 10.6407 1.52038 10.7303 1.20454 10.9058C0.888695 11.0812 0.62439 11.3365 0.438 11.646L0.382 11.74L1.358 12.83L1.456 12.642C1.51658 12.4931 1.62001 12.3655 1.75317 12.2754C1.88633 12.1853 2.04323 12.1368 2.204 12.136C2.59 12.136 2.832 12.42 2.832 12.876C2.832 13.206 2.728 13.76 2.032 13.76H1.548V15.248H2.244C2.83 15.248 3.126 15.512 3.126 16.034C3.126 16.462 2.91 16.918 2.306 16.918C1.61 16.918 1.23 16.318 1.13 16.118L1.03 15.934L0 17.1L0.062 17.194C0.301939 17.5698 0.632832 17.879 1.02404 18.093C1.41524 18.307 1.85411 18.4187 2.3 18.418C3.612 18.418 4.534 17.456 4.566 16.068C4.84021 16.1628 5.13688 16.1711 5.416 16.092V19H6.89V12.1H8.3V19H9.774V12.1H10.906V10.7H4.5V12.1ZM15.394 12.86H16.468V17.3H11.604V19H17.924V12.86H19L17.128 9.246L15.394 12.86Z"
                            fill="#403F3F"
                          />
                        </svg>
                      </i>
                      <span>Language Setting</span>
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
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Fragment>
        ) : (
          <Notification />
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
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="sumanta">
          <DialogContentText className="logoutWrapp">
            <span>Are you sure you want to logout ?</span>
            <Button onClick={handleSucess} variant="contained" color="primary">
              YES
            </Button>
            <Button onClick={handleClose} color="primary">
              CANCEL
            </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </HeaderContainer>
  );
}

Header.propTypes = {};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(Header));
