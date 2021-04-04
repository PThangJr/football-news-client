import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const InputField = (props) => {
  const { type, placeholder, name, cName, onChange, onBlur, disabled } = props;
  return (
    <input
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      placeholder={placeholder}
      name={name}
      className={`input-field ${cName}`}
      disabled={disabled}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  cName: PropTypes.string,
  disabled: PropTypes.bool,
};
InputField.defaultProps = {
  cName: '',
};

export default InputField;
