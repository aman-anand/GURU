/**
 *
 * Bredcrumb
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BredcrumbContainer } from './style';

function Bredcrumb(props) {
  return <BredcrumbContainer>{props.children}</BredcrumbContainer>;
}

Bredcrumb.propTypes = {
  children: PropTypes.element,
};

export default Bredcrumb;
