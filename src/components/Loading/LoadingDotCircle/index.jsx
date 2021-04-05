import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const LoadingDotCircle = (props) => {
  return (
    <div className="loading-dot-circle">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

LoadingDotCircle.propTypes = {};

export default LoadingDotCircle;
