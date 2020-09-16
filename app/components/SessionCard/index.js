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
  const { sticyOne, sticyTwo, sticyOneData, sticyTwoData, courseData } = props;
  const { date, month } = sticyOneData || {};
  const { name, classname } = sticyTwoData || {};
  const { courseName, totalSections, totalVideos, duration, coverImage, _id } = courseData || {};
  return (
    <SessionCardContainer className="sessionCardWrapper" bg={coverImage || MaskGroup}>
      <a href={`/courses/${_id}`} className="imageBox" role="button">
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
              <span>{courseName}</span>
              <span>
                {totalSections} Sesssions | {totalVideos} Videos | {duration}
              </span>
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
  courseData: PropTypes.object,
};

export default SessionCard;
