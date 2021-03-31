import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const InputField = (props) => {
  const { type, placeholder, name, cName, onChange, onBlur } = props;
  return (
    <input
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      placeholder={placeholder}
      name={name}
      className={`input-field ${cName}`}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  cName: PropTypes.string,
};
InputField.defaultProps = {
  cName: '',
};

export default InputField;
