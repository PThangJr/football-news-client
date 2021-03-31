import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import InputGroup from '../form-groups/InputGroup';
const InputControl = (props) => {
  const { type, name, placeholder, cName, message, form } = props;
  // console.log(form.formState.dirtyFields);
  const hasError = form?.errors?.[name];
  // const hasSuccess = form.formState.touched?.[name];
  // const isTouched = form.formState.touched?.[name];
  // const displayStatus = () => {
  //   if (isTouched) {
  //     if (hasError || message?.[name]) {
  //       return 'error';
  //     } else {
  //       return 'success';
  //     }
  //   } else {
  //     if (hasError || message?.[name]) {
  //       return 'error';
  //     }
  //     return '';
  //   }
  // };
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ onChange, onBlur }, { invalid, isTouched, isDirty }) => {
        return (
          <InputGroup
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            type={type}
            placeholder={placeholder}
            status={(hasError && 'error') || (message?.[name] && 'error') || ''}
            // status={displayStatus()}
            message={hasError?.message || message?.[name] || ''}
            cName={cName}
          />
        );
      }}
    />
  );
};
InputControl.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  cName: PropTypes.string,
  status: PropTypes.string,
  message: PropTypes.object,
};
export default InputControl;
