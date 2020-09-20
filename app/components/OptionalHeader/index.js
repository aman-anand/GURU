/**
 *
 * OptionalHeader
 *
 */

import React, { memo, Fragment } from 'react';

import withSizes from 'react-sizes';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { OptionalHeaderContainer } from './style';

const changeAnimateFn = (goTo, props) => {
  const { changeAnimate } = props;
  if (changeAnimate) {
    changeAnimate(goTo);
  }
  return null;
};

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
          <div className="notify">
            <span className="iconBox">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16H11V14H9V16ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C8.93913 4 7.92172 4.42143 7.17157 5.17157C6.42143 5.92172 6 6.93913 6 8H8C8 7.46957 8.21071 6.96086 8.58579 6.58579C8.96086 6.21071 9.46957 6 10 6C10.5304 6 11.0391 6.21071 11.4142 6.58579C11.7893 6.96086 12 7.46957 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 6.93913 13.5786 5.92172 12.8284 5.17157C12.0783 4.42143 11.0609 4 10 4Z"
                  fill="#403F3F"
                />
              </svg>
            </span>
            <span className="iconBox">
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 15H4V8.5C4 6 6 4 8.5 4C11 4 13 6 13 8.5V15ZM15 14V8.5C15 5.43 12.86 2.86 10 2.18V1.5C10 1.10218 9.84196 0.720644 9.56066 0.43934C9.27936 0.158035 8.89782 0 8.5 0C8.10218 0 7.72064 0.158035 7.43934 0.43934C7.15804 0.720644 7 1.10218 7 1.5V2.18C4.13 2.86 2 5.43 2 8.5V14L0 16V17H17V16L15 14ZM8.5 20C9.03043 20 9.53914 19.7893 9.91421 19.4142C10.2893 19.0391 10.5 18.5304 10.5 18H6.5C6.5 18.5304 6.71071 19.0391 7.08579 19.4142C7.46086 19.7893 7.96957 20 8.5 20Z"
                  fill="#403F3F"
                />
              </svg>
            </span>
          </div>
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
