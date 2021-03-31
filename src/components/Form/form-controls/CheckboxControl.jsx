import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import CheckboxGroup from '../form-groups/CheckboxGroup';

const CheckboxControl = (props) => {
  const { form, name } = props;
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ onChange, value, name, ref }) => (
        <CheckboxGroup onChange={(e) => onChange(e.target.checked)} checked={value} />
      )}
    />
  );
};

CheckboxControl.propTypes = {
  name: PropTypes.string,
  form: PropTypes.object,
};

export default CheckboxControl;
