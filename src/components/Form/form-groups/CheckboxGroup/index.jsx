import React from 'react';
import PropTypes from 'prop-types';
import CheckboxField from '../../form-fields/CheckboxField';

const CheckboxGroup = (props) => {
  const { cName, name, onChange } = props;
  return (
    <div className="checkbox-group">
      <CheckboxField name={name} cName={cName} onChange={onChange} />
    </div>
  );
};

CheckboxGroup.propTypes = {
  name: PropTypes.string,
  cName: PropTypes.string,
  onChange: PropTypes.func,
};

export default CheckboxGroup;
