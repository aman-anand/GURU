/**
 *
 * ListItembox
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { ListItemboxContainer } from './style';

function ListItembox(props) {
  const { data, onMethod, arrow } = props || {};
  const { type, title, durationTime, url } = data || {};
  return (
    <ListItemboxContainer onClick={() => onMethod({ type, url })}>
      {['video'].includes(type) ? (
        <div className="iconbox video">
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
        </div>
      ) : null}
      {['File', 'file'].includes(type) ? (
        <div className="iconbox pdf">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 0C0.89 0 0 0.89 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H10V19L13 16L16 19V14H18C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12V5V3V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H14H2ZM10 2L13 4L16 2V5.5L19 7L16 8.5V12L13 10L10 12V8.5L7 7L10 5.5V2ZM2 2H7V4H2V2ZM2 6H5V8H2V6ZM2 10H7V12H2V10Z"
              fill="#403F3F"
            />
          </svg>
        </div>
      ) : null}
      {['blog'].includes(type) ? (
        <div className="iconbox blog">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 0H22V12H4V0ZM13 3C13.7956 3 14.5587 3.31607 15.1213 3.87868C15.6839 4.44129 16 5.20435 16 6C16 6.79565 15.6839 7.55871 15.1213 8.12132C14.5587 8.68393 13.7956 9 13 9C12.2044 9 11.4413 8.68393 10.8787 8.12132C10.3161 7.55871 10 6.79565 10 6C10 5.20435 10.3161 4.44129 10.8787 3.87868C11.4413 3.31607 12.2044 3 13 3ZM8 2C8 2.53043 7.78929 3.03914 7.41421 3.41421C7.03914 3.78929 6.53043 4 6 4V8C6.53043 8 7.03914 8.21071 7.41421 8.58579C7.78929 8.96086 8 9.46957 8 10H18C18 9.46957 18.2107 8.96086 18.5858 8.58579C18.9609 8.21071 19.4696 8 20 8V4C19.4696 4 18.9609 3.78929 18.5858 3.41421C18.2107 3.03914 18 2.53043 18 2H8ZM0 4H2V14H18V16H0V4Z"
              fill="white"
            />
          </svg>
        </div>
      ) : null}
      {['audio'].includes(type) ? (
        <div className="iconbox blog">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 0H22V12H4V0ZM13 3C13.7956 3 14.5587 3.31607 15.1213 3.87868C15.6839 4.44129 16 5.20435 16 6C16 6.79565 15.6839 7.55871 15.1213 8.12132C14.5587 8.68393 13.7956 9 13 9C12.2044 9 11.4413 8.68393 10.8787 8.12132C10.3161 7.55871 10 6.79565 10 6C10 5.20435 10.3161 4.44129 10.8787 3.87868C11.4413 3.31607 12.2044 3 13 3ZM8 2C8 2.53043 7.78929 3.03914 7.41421 3.41421C7.03914 3.78929 6.53043 4 6 4V8C6.53043 8 7.03914 8.21071 7.41421 8.58579C7.78929 8.96086 8 9.46957 8 10H18C18 9.46957 18.2107 8.96086 18.5858 8.58579C18.9609 8.21071 19.4696 8 20 8V4C19.4696 4 18.9609 3.78929 18.5858 3.41421C18.2107 3.03914 18 2.53043 18 2H8ZM0 4H2V14H18V16H0V4Z"
              fill="white"
            />
          </svg>
        </div>
      ) : null}
      <div className="listContent">
        <span>{title}</span>
        {durationTime ? <span>{durationTime}</span> : null}
      </div>
      {arrow ? (
        <div className="listStatus">
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1L4.125 9L1 5.36364"
              stroke="#DA3A33"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : null}
    </ListItemboxContainer>
  );
}

ListItembox.propTypes = {};

export default memo(ListItembox);
