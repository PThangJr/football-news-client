import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TextareaField = (props) => {
  const handleChange = (e) => {
    handleGetValues(e.target.value);
  };

  const { placeholder, id, name, maxLength, rows, max, cName, disabled, value, handleGetValues } = props;
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      id={id}
      maxLength={maxLength || 700}
      rows={rows || 5}
      max={max || 20}
      className={'textarea-field ' + cName}
      disabled={disabled}
      value={value}
      onChange={handleChange}
    />
  );
};

TextareaField.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.string,
  rows: PropTypes.string,
  max: PropTypes.string,
  cName: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextareaField;
