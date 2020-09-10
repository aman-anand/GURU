/**
 *
 * UpcommingSession
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import { UpcommingSessionContainer } from './style';

function UpcommingSession(props) {
  const { seeall, button } = props || {};
  return (
    <UpcommingSessionContainer>
      <div className="_leftUpcomming">
        <p className="_sessionBox">
          <span>Upcoming Sessions</span>
          <span>15 sessions aligned</span>
        </p>
      </div>
      <div className="_rightUpcomming">
        {button ? (
          <div className="_wrapButton">
            <span>
              <i>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8.81667L2.2915 5L6 1.175L4.8583 0L0 5L4.8583 10L6 8.81667Z" fill="white" />
                </svg>
              </i>
              PREVIOUS
            </span>
            <span>
              NEXT
              <i>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.82897e-07 1.18333L3.7085 5L8.50953e-07 8.825L1.1417 10L6 5L1.1417 -5.28948e-07L1.82897e-07 1.18333Z" fill="white" />
                </svg>
              </i>
            </span>
          </div>
        ) : null}
        {seeall ? <span className="seeAll">SEE ALL</span> : null}
      </div>
    </UpcommingSessionContainer>
  );
}

UpcommingSession.propTypes = {};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default withSizes(mapSizesToProps)(UpcommingSession);
