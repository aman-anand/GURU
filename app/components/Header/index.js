/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import withSizes from 'react-sizes';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import logo from '../../images/logo.jpg';
import { HeaderStyle } from './style';

const orderList = () => (
  <ul>
    <li>
      <a className="active" href="/" title="">
        Home
      </a>
    </li>
    <li>
      <a href="/" title="">
        Tracks
      </a>
    </li>
    <li>
      <a href="/" title="">
        Courses
      </a>
    </li>
    <li>
      <a href="/" title="">
        About
      </a>
    </li>
  </ul>
);
const closeNavigate = () => {
  const element = document.getElementById('mobileNavigation');
  element.classList.remove('active');
};
const openNavigate = () => {
  const element = document.getElementById('mobileNavigation');
  element.classList.add('active');
};

function Header(props) {
  // const { isMobile } = props || {};
  return (
    <HeaderStyle>
      <nav>
        <div className="leftNav">
          {props.isMobile ? (
            <div
              className="menubar"
              onClick={() => openNavigate()}
              role="presentation"
            >
              {[1, 2, 3].map(() => (
                <span />
              ))}
            </div>
          ) : null}
          <div className="logoBox">
            <img src={logo} alt="" title="" />
          </div>
          {!props.isMobile ? orderList() : null}
        </div>
        <div className="rightNav">
          <div className="callBack">
            <a href="/">
              {!props.isMobile ? <i className="callIcon" /> : null}
              {props.isMobile ? 'Login/Signup' : 'Request a call back'}
            </a>
          </div>
          {!props.isMobile ? (
            <div className="profile_icon">
              <span>JB</span>
            </div>
          ) : null}
        </div>
        {props.isMobile ? (
          <aside id="mobileNavigation">
            <div
              className="closeNav"
              onClick={() => closeNavigate()}
              role="presentation"
            >
              x
            </div>
            <div className="mob_nav">
              <div className="leftNavLogo">
                <img src={logo} alt="" title="" />
              </div>
              {orderList()}
            </div>
          </aside>
        ) : null}
      </nav>
    </HeaderStyle>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool,
};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default memo(withSizes(mapSizesToProps)(Header));
