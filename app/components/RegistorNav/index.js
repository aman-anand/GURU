/**
 *
 * RegistorNav
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { RegistorNavContainer } from './style';

function RegistorNav() {
  const { pathname } = window.location;
  return (
    <RegistorNavContainer>
      <div className={`${['/signin'].includes(pathname) ? 'active' : null}`}>
        <Link to="/signin">LOGIN</Link>
      </div>
      {/* <div className={`${['/signup'].includes(pathname) ? 'active' : null}`}>
        <Link to="/signup">REGISTER</Link>
  </div> */}
    </RegistorNavContainer>
  );
}

RegistorNav.propTypes = {};

export default memo(RegistorNav);
