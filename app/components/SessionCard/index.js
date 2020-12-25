/**
 *
 * SessionCard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import MaskGroup from '../../images/MaskGroup.jpg';
import { languageString } from '../../services/CommonSetterGetter';
import { SessionCardContainer } from './style';

function SessionCard(props) {
  const { sticyOne, sticyTwo, sticyOneData, sticyTwoData, courseData } = props;
  const { date, month } = sticyOneData || {};
  const { name, classname } = sticyTwoData || {};
  const { courseName, totalSections, totalVideos, coverImage, _id } =
    courseData || {};
  return (
    <SessionCardContainer className="sessionCardWrapper" bg={coverImage}>
      <a href={`/course/${_id}`} className="imageBox" role="button">
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
                {totalSections} {languageString('txt_sessions')} | {totalVideos}{' '}
                {languageString('txt_video')}
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

export default memo(SessionCard);
