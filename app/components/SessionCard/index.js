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
  const { sticyOne, sticyTwo, sticyOneData, sticyTwoData } = props;
  const { date, month } = sticyOneData || {};
  const { name, classname } = sticyTwoData || {};
  return (
    <SessionCardContainer bg={MaskGroup}>
      <a href="/" className="imageBox" role="button">
        <div className="topBox">
          {sticyOne ? (
            <div className="cardSticker">
              <div>{date}</div>
              <div>{month}</div>
            </div>
          ) : null}
          {sticyTwo ? (
            <div className="secoundCardSticker">
              <div className={classname}>{name}</div>
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
  sticyOneData: PropTypes.object,
  sticyTwoData: PropTypes.object,
};

export default SessionCard;
