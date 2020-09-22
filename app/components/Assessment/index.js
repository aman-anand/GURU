/**
 *
 * Assessment
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { AssessmentContainer } from './style';

function Assessment() {
  return (
    <AssessmentContainer>
      <div className="iconBox">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0C13.24 0 11 2.24 11 5V7H2C0.9 7 0 7.89 0 9V19C0 20.11 0.9 21 2 21H14C15.11 21 16 20.11 16 19V9C16 7.9 15.11 7 14 7H13V5C13 3.34 14.34 2 16 2C17.66 2 19 3.34 19 5V7H21V5C21 2.24 18.76 0 16 0ZM8 12C9.1 12 10 12.89 10 14C10 15.11 9.11 16 8 16C6.9 16 6 15.11 6 14C6 12.9 6.9 12 8 12Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="mContent">
        <span>COMPLETED</span>
        <span>ASSESSMENT 1</span>
        <span>5 Questions | 15 Minutes</span>
      </div>
      <div className="mRight">
        <span className="score">Score: 5/5</span>
      </div>
    </AssessmentContainer>
  );
}

Assessment.propTypes = {};

export default memo(Assessment);