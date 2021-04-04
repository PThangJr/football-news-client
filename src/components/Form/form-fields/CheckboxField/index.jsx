import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const CheckboxField = (props) => {
  const { cName, onChange, name, disabled } = props;
  return (
    <input type="checkbox" disabled={disabled} name={name} className={`checkbox-field ${cName}`} onChange={onChange} />
  );
};

CheckboxField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  cName: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CheckboxField;
