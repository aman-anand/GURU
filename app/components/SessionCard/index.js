/**
 *
 * SessionCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import MaskGroup from '../../images/MaskGroup.jpg';
import { SessionCardContainer } from './style';

function SessionCard(props) {
  const { sticyOne, sticyTwo } = props;
  return (
    <SessionCardContainer bg={MaskGroup}>
      <a href="/" className="imageBox" role="button">
        <div className="topBox">
          {sticyOne ? (
            <div className="cardSticker">
              <div>09</div>
              <div>September</div>
            </div>
          ) : null}
          {sticyTwo ? (
            <div className="secoundCardSticker">
              <div>09</div>
              <div>September</div>
            </div>
          ) : null}
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

SessionCard.propTypes = {
  sticyOne: PropTypes.bool,
  sticyTwo: PropTypes.bool,
};

export default SessionCard;
