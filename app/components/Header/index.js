/* eslint-disable react/prop-types */
/**
 *
 * Header
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import { Link } from 'react-router-dom';
import logoIMG from '../../images/logo.svg';
import hemburger from '../../images/hemburger.png';
import { HeaderContainer } from './style';
import { isUserAlreadyLogin } from '../../dataService/Login';

const closeNavigate = () => {
  const element = document.getElementById('mobileNavigation');
  element.classList.remove('active');
};
const openNavigate = () => {
  const element = document.getElementById('mobileNavigation');
  element.classList.add('active');
};

export const listCompo = props => {
  const { pathname } = window.location;
  const pathMatch = pathname.indexOf('courses/') > -1;
  // console.log('pathname', pathname);
  return (
    <ul className="navList">
      {props.isMobile ? (
        <li>
          <span onClick={() => closeNavigate()} role="presentation">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41003 1.42L2.83003 6L7.41003 10.59L6.00003 12L3.38077e-05 6L6.00003 1.23266e-07L7.41003 1.42Z" fill="#403F3F" />
            </svg>
          </span>
        </li>
      ) : null}
      <li>
        <Link to="/home" className={`${['/home'].includes(pathname) ? 'active' : null}`} role="presentation">
          <i className="icon" />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/courses" className={`${['/courses'].includes(pathname) || pathMatch ? 'active' : null}`} role="presentation">
          <i className="icon" />
          <span>Courses</span>
        </Link>
      </li>
      <li>
        <Link to="/sessions" className={`${['/sessions'].includes(pathname) ? 'active' : null}`} role="presentation">
          <i className="icon" />
          <span>Upcoming Sessions</span>
        </Link>
      </li>
      {props.isMobile ? (
        <Fragment>
          <li>
            <Link to="/sessions" className={`${['/sessions'].includes(pathname) ? 'active' : null}`} role="presentation">
              <i className="icon" />
              <span>Completed Sessions</span>
            </Link>
          </li>
          <li>
            <Link to="/sessions" className={`${['/sessions'].includes(pathname) ? 'active' : null}`} role="presentation">
              <i className="icon" />
              <span>Certificate</span>
            </Link>
          </li>
          <li>
            <Link to="/sessions" className={`${['/sessions'].includes(pathname) ? 'active' : null}`} role="presentation">
              <i className="icon" />
              <span>Leaderboard</span>
            </Link>
          </li>
          <li>
            <Link to="/sessions" className={`${['/sessions'].includes(pathname) ? 'active' : null}`} role="presentation">
              <i className="icon" />
              <span>Reffer a friend</span>
            </Link>
          </li>
          <li>
            <Link to="/sessions" className={`${['/sessions'].includes(pathname) ? 'active' : null}`} role="presentation">
              <i className="icon" />
              <span>Chart with guru</span>
            </Link>
          </li>
          <li>
            <Link to="/sessions" className={`${['/sessions'].includes(pathname) ? 'active' : null}`} role="presentation">
              <i className="icon" />
              <span>Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/sessions" className={`${['/sessions'].includes(pathname) ? 'active' : null}`} role="presentation">
              <i className="icon" />
              <span>Share</span>
            </Link>
          </li>
          <li>
            <Link to="/sessions" className={`${['/sessions'].includes(pathname) ? 'active' : null}`} role="presentation">
              <i className="icon" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/attendance" className={`${['/attendance'].includes(pathname) ? 'active' : null}`} role="presentation">
              <i className="icon" />
              <span>Logout</span>
            </Link>
          </li>
        </Fragment>
      ) : null}
    </ul>
  );
};
function Header(props) {
  const { isMobile, title } = props;
  return (
    <HeaderContainer>
      <div className="logoBox">
        {!isMobile ? (
          <img src={logoIMG} alt="" title="" />
        ) : (
          <div className="menu" onClick={() => openNavigate()} role="presentation">
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="outNavList" onClick={() => closeNavigate()} role="presentation" />
        </aside>
      ) : null}
    </HeaderContainer>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool,
  title: PropTypes.string,
};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default withSizes(mapSizesToProps)(Header);
