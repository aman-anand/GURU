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

export const listCompo = () => {
  const { pathname } = window.location;
  const pathMatch = pathname.indexOf('courses/') > -1;
  console.log('pathname', pathname);
  return (
    <ul className="navList">
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
          <span>Sessions</span>
        </Link>
      </li>
      <li>
        <Link to="/attendance" className={`${['/attendance'].includes(pathname) ? 'active' : null}`} role="presentation">
          <i className="icon" />
          <span>Attendance Log</span>
        </Link>
      </li>
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
          <div className="menu">
            <img src={hemburger} alt="" title="" />
          </div>
        )}
      </div>
      <div className="navListBox">{!isMobile ? listCompo() : title}</div>
      <div className="navRight">
        {isUserAlreadyLogin() && !isMobile ? (
          <Fragment>
            <div className="chart" />
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
