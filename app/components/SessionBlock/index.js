/**
 *
 * SessionBlock
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { SessionBlockContainer } from './style';
function SessionBlock(props) {
  const { data, selectedSession, color } = props || {};
  const { name, displaySessionDate, address, attendees, guru, _id } =
    data || {};
  const { locality, city, state, pincode } = address || {};
  const length = attendees ? attendees.length : 0;
  return (
    <SessionBlockContainer color={color}>
      <a className="anchor" href={`/sessions/${_id}`}>
        <div className="topBlock">
          <div className="icon">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 18H2V7H16V18ZM13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 2.89 17.1 2 16 2H15V0H13ZM14 11H9V16H14V11Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="contentBlock">
            <p>
              <span>{name}</span>
              <span>{displaySessionDate}</span>
              <span>
                {locality}, {city}, {state}, {pincode}
              </span>
            </p>
          </div>
        </div>
        <div className="bottomBlock">
          {['attendedSession'].includes(selectedSession) ? (
            <span className="text1">
              <b>Guru Name:</b>{' '}
              {guru &&
                guru.map(dataList => {
                  const { fName, lName } = dataList || {};
                  return (
                    <span>
                      {fName} {lName}
                      {', '}
                    </span>
                  );
                })}
            </span>
          ) : null}
          {['upComingSession'].includes(selectedSession) ? (
            <div className="upComContent">
              <div className="cercleBox">
                <span />
                <span />
                <span />
                <span>+{length}</span>
              </div>
              <span className="text2">trainee are attending sessions</span>
            </div>
          ) : null}
        </div>
      </a>
    </SessionBlockContainer>
  );
}

SessionBlock.propTypes = {};

export default memo(SessionBlock);
