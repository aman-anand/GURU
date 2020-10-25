/**
 *
 * OptionalHeader
 *
 */

import React, { memo, Fragment } from 'react';

import withSizes from 'react-sizes';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Notification from '../Notification/Loadable';
import { OptionalHeaderContainer } from './style';

const changeAnimateFn = (goTo, props) => {
  const { changeAnimate } = props;
  if (changeAnimate) {
    changeAnimate(goTo);
  }
  return null;
};

// const openNotification = () => {
//   const element = document.getElementById('notification');
//   element.classList.toggle('active');
// };

function OptionalHeader(props) {
  const { goTo, title, sendCloseMessage, isMobile } = props;
  return (
    <Fragment>
      {isMobile ? (
        <OptionalHeaderContainer>
          <div
            className="backTo"
            onClick={() => changeAnimateFn(goTo, props)}
            role="presentation"
          >
            <Link
              to={goTo}
              onClick={() => sendCloseMessage({ screenUrl: '/sales' })}
            >
              <span className="">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.41003 1.42L2.83003 6L7.41003 10.59L6.00003 12L3.38077e-05 6L6.00003 1.23266e-07L7.41003 1.42Z"
                    fill="#403F3F"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <div className="pageTitle">{title || ''}</div>
          <Notification />
        </OptionalHeaderContainer>
      ) : null}
    </Fragment>
  );
}

OptionalHeader.propTypes = {
  goTo: PropTypes.string,
  title: PropTypes.string,
  sendCloseMessage: PropTypes.func,
  isMobile: PropTypes.bool,
};
const mapSizesToProps = ({ width }) => ({ isMobile: width < 768 });

export default memo(withSizes(mapSizesToProps)(OptionalHeader));
