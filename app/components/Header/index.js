/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoIMG from '../../images/logo.svg';
import { HeaderContainer } from './style';

function Header() {
  return (
    <HeaderContainer>
      <div className="logoBox">
        <img src={logoIMG} alt="" title="" />
      </div>
      <div className="navListBox">
        <ul className="navList">
          <li>
            <Link to="/home" className="active" role="presentation">
              <i className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/sessions" role="presentation">
              <i className="icon" />
              <span>Sessions</span>
            </Link>
          </li>
          <li>
            <Link to="/expenses" role="presentation">
              <i className="icon" />
              <span>Expenses</span>
            </Link>
          </li>
          <li>
            <Link to="/attendance" role="presentation">
              <i className="icon" />
              <span>Attendance Log</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <div className="chart">C</div>
        <div className="myProfileNav">
          <div className="proIcon">l</div>
          <div className="proName">
            <p>
              <span>Rajiv Shukla</span>
              <span>Roll No: 00274</span>
            </p>
          </div>
          <i className="arrow" />
        </div>
      </div>
    </HeaderContainer>
  );
}

Header.propTypes = {};

export default Header;
