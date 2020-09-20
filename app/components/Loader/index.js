/**
 *
 * Loader
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { LoaderContainer } from './style';

function Loader() {
  return (
    <LoaderContainer id="loaderDiv" className="loader">
      <span className="loader loader-quart"> </span>
    </LoaderContainer>
  );
}

Loader.propTypes = {};

export default memo(Loader);
