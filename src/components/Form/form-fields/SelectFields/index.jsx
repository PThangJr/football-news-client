import React from 'react';
// import PropTypes from 'prop-types';

const SelectField = (props) => {
  const { name, children } = props;
  return (
    <select type="select" name={name} className="select-field">
      {children}
    </select>
  );
};

// SelectField.propTypes = {

// };

export default SelectField;
