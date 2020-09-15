/* eslint-disable jsx-a11y/no-autofocus */
/**
 *
 * RenderFormField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const RenderFormField = ({ input, label, type, placeHolder, autoFocus, meta: { touched, error, warning } }) => (
  <div className="formField-wrapper">
    <div className="label">{label}</div>
    <input {...input} type={type} placeholder={placeHolder} autoFocus={autoFocus} className={touched && (error || warning) ? 'FieldError' : null} />
    {touched && ((error && <span className="error"> {error} </span>) || (warning && <span className="error"> {warning} </span>))}
  </div>
);

RenderFormField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.any,
  type: PropTypes.string,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  autoFocus: PropTypes.bool,
  meta: PropTypes.object,
};

export default RenderFormField;
