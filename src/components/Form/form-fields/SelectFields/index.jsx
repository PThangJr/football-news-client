import React from 'react';
import PropTypes from 'prop-types';

const SelectField = (props) => {
  const { name, children, cName } = props;
  return (
    <select type="select" name={name} className={`select-field ${cName ? `select-field--${cName}` : ''}`}>
      {children}
    </select>
  );
};

SelectField.propTypes = {
  name: PropTypes.string,
  cName: PropTypes.string,
};

export default SelectField;
