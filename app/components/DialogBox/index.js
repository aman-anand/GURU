/**
 *
 * DialogBox
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { DialogBoxContainer } from './style';
const profileModalClose = () => {
  const element = document.getElementById('profileDialog');
  element.classList.remove('active');
};
function DialogBox(props) {
  return (
    <DialogBoxContainer id="profileDialog">
      <div className="dialogWreapper">
        <div className="heading">
          <h3>Profile Details</h3>
          <i onClick={() => profileModalClose()} role="presentation" />
        </div>
        {props.children}
      </div>
    </DialogBoxContainer>
  );
}

DialogBox.propTypes = {
  children: PropTypes.element,
};

export default memo(DialogBox);
