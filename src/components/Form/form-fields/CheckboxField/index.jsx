import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const CheckboxField = (props) => {
  const { cName, onChange, name } = props;
  return <input type="checkbox" name={name} className={`checkbox-field ${cName}`} onChange={onChange} />;
};

CheckboxField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  cName: PropTypes.string,
};

export default CheckboxField;
