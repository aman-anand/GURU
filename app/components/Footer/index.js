/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer } from './style';

function Footer() {
  const { pathname } = window.location;
  return (
    <FooterContainer>
      <ul>
        <li>
          <Link
            to="/home"
            className={`${['/home'].includes(pathname) ? 'active' : null}`}
          >
            <i className="icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0L16 6V18H11V11H5V18H0V6L8 0Z" fill="white" />
              </svg>
            </i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/certificate"
            className={`${
              ['/certificate'].includes(pathname) ? 'active' : null
            }`}
          >
            <i className="icon">
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6 18C13.0774 18 13.5352 17.8104 13.8728 17.4728C14.2104 17.1352 14.4 16.6774 14.4 16.2V1.8C14.4 0.801 13.59 0 12.6 0H7.2V6.3L4.95 4.95L2.7 6.3V0H1.8C1.32261 0 0.864773 0.189642 0.527208 0.527208C0.189642 0.864773 0 1.32261 0 1.8V16.2C0 16.6774 0.189642 17.1352 0.527208 17.4728C0.864773 17.8104 1.32261 18 1.8 18H12.6Z"
                  fill="white"
                />
              </svg>
            </i>
            <span>Certificate</span>
          </Link>
        </li>
        <li>
          <Link
            to="/sessions"
            className={`${['/sessions'].includes(pathname) ? 'active' : null}`}
          >
            <i className="icon">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                  fill="white"
                />
              </svg>
            </i>
            <span>Sessions</span>
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={`${['/profile'].includes(pathname) ? 'active' : null}`}
          >
            <i className="icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14ZM12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6ZM0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2C0.89 0 0 0.9 0 2Z"
                  fill="white"
                />
              </svg>
            </i>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </FooterContainer>
  );
}

Footer.propTypes = {};

export default memo(Footer);
