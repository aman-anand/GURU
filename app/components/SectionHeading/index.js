/**
 *
 * SectionHeading
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SectionHeadingContainer } from './style';

function SectionHeading(props) {
  const { title, class_name: className } = props;
  return (
    <SectionHeadingContainer className={className}>
      <h6>{title}</h6>
    </SectionHeadingContainer>
  );
}

SectionHeading.propTypes = {
  title: PropTypes.string,
  class_name: PropTypes.string,
};

export default memo(SectionHeading);
