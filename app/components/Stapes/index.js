/**
 *
 * Stapes
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { StapesContainer } from './style';

function Stapes() {
  return (
    <StapesContainer>
      <div className="stepsBox">
        <i className="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
              fill="#2E323D"
            />
          </svg>
        </i>
        <span>Select Language</span>
      </div>
      <div className="stepsBox">
        <i className="icon" />
        <span>Create an Account</span>
      </div>
      <div className="stepsBox">
        <i className="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
              fill="#2E323D"
            />
          </svg>
        </i>
        <span>Pending Registration</span>
      </div>
    </StapesContainer>
  );
}

Stapes.propTypes = {};

export default memo(Stapes);
