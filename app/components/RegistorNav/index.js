/**
 *
 * RegistorNav
 *
 */

import React from 'react';
import { RegistorNavContainer } from './style';

function RegistorNav() {
  console.log('WINDOW', window.location.pathname);
  return (
    <RegistorNavContainer>
      <div className="active">LOGIN</div>
      <div>REGISTER</div>
    </RegistorNavContainer>
  );
}

RegistorNav.propTypes = {};

export default RegistorNav;
