import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TextareaField = (props) => {
  const [values, setValues] = useState('');
  const handleChange = (e) => {
    setValues(e.target.value);
    handleValues(e.target.value);
  };
  const { placeholder, id, name, maxLength, rows, max, cName, disabled, value, handleValues } = props;
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
      value={values}
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
