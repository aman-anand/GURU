/**
 *
 * SectionHeading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SectionHeadingContainer } from './style';

function SectionHeading(props) {
  const { title, class_name } = props;
  return (
    <SectionHeadingContainer className={class_name}>
      <h6>{title}</h6>
    </SectionHeadingContainer>
  );
}

SectionHeading.propTypes = {
  title: PropTypes.string,
  class_name: PropTypes.string,
};

export default SectionHeading;
