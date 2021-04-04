import React from 'react';
import InputField from '../../form-fields/InputField';
import PropTypes from 'prop-types';
import './style.scss';
const InputGroup = (props) => {
  const { onChange, onBlur, type, name, placeholder, cName, message = '', status, disabled } = props;
  // const renderStatusIcon = () => {
  //   if (status === 'success') {
  //     return (
  //       <span className="icon-box icon-box--success">
  //         <i className="fas fa-check"></i>
  //       </span>
  //     );
  //   } else if (status === 'error') {
  //     return (
  //       <span className="icon-box icon-box--error">
  //         <i className="fas fa-times"></i>
  //       </span>
  //     );
  //   }
  // };
  return (
    <div className={`input-group input-group--${status} input-group--${cName}`}>
      <div className="input-box">
        <InputField
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          name={name}
          placeholder={placeholder}
          cName={cName}
          disabled={disabled}
        />
        {/* {renderStatusIcon()} */}
        {status && (
          <span className={`icon-box icon-box--${status}`}>
            {status === 'error' && <i className="fas fa-times"></i>}
            {status === 'success' && <i className="fas fa-check"></i>}
          </span>
        )}
      </div>
      {message && (
        <span className="form-message">
          <span>(*)</span>
          {message}
        </span>
      )}
    </div>
  );
};

InputGroup.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  cName: PropTypes.string,
  status: PropTypes.string,
  message: PropTypes.string,
  disabled: PropTypes.bool,
};
export default InputGroup;
