import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const LoadingDotCircle = ({ style = {}, type = '' }) => {
  return (
    <div className={'loading-dot-circle ' + (type ? `loading-dot-circle--${type}` : '')} style={style}>
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

LoadingDotCircle.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
};

export default LoadingDotCircle;
