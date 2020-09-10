/**
 *
 * Search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { SearchContainer } from './style';

function Search() {
  return (
    <SearchContainer>
      <span>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.08571 0C5.16931 0 6.20853 0.430458 6.97475 1.19668C7.74097 1.9629 8.17143 3.00212 8.17143 4.08571C8.17143 5.09771 7.80057 6.028 7.19086 6.74457L7.36057 6.91429H7.85714L11 10.0571L10.0571 11L6.91429 7.85714V7.36057L6.74457 7.19086C6.028 7.80057 5.09771 8.17143 4.08571 8.17143C3.00212 8.17143 1.9629 7.74097 1.19668 6.97475C0.430458 6.20853 0 5.16931 0 4.08571C0 3.00212 0.430458 1.9629 1.19668 1.19668C1.9629 0.430458 3.00212 0 4.08571 0ZM4.08571 1.25714C2.51429 1.25714 1.25714 2.51429 1.25714 4.08571C1.25714 5.65714 2.51429 6.91429 4.08571 6.91429C5.65714 6.91429 6.91429 5.65714 6.91429 4.08571C6.91429 2.51429 5.65714 1.25714 4.08571 1.25714Z"
            fill="#727B87"
          />
        </svg>
      </span>
      <input type="text" placeholder="Search Sessions" />
    </SearchContainer>
  );
}

Search.propTypes = {};

export default Search;
