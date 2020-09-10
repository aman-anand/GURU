/**
 *
 * SessionCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import MaskGroup from '../../images/MaskGroup.jpg';
import { SessionCardContainer } from './style';

function SessionCard() {
  return (
    <SessionCardContainer bg={MaskGroup}>
      <a href="/" className="imageBox" role="button">
        <div className="topBox">
          <div className="cardSticker">
            <div>09</div>
            <div>September</div>
          </div>
        </div>
        <div className="bottomBox">
          <div className="_lb">
            <p>
              <span>SAVINGS EDUCATION</span>
              <span>3 Sesssions | 10 Videos | 3 hrs 30 mins</span>
            </p>
          </div>
          <div className="_rb" />
        </div>
      </a>
    </SessionCardContainer>
  );
}

SessionCard.propTypes = {};

export default SessionCard;
