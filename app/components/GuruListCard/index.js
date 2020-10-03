/**
 *
 * GuruListCard
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { GuruListCardContainer } from './style';

function GuruListCard() {
  return (
    <GuruListCardContainer>
      <div className="guru_img" />
      <div className="guru_content">
        <span>Banking Guru</span>
        <span>saving@gmail.com | 98087654</span>
      </div>
      <div className="guru_chart">
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
              fill="#2E323D"
            />
          </svg>
        </i>
      </div>
    </GuruListCardContainer>
  );
}

GuruListCard.propTypes = {};

export default memo(GuruListCard);