import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
const LoadingLinear = ({ className }) => {
  return <div className={'loading loading--linear ' + (className ? className : '')}></div>;
};
LoadingLinear.propTypes = {
  className: PropTypes.string,
};
export default LoadingLinear;
