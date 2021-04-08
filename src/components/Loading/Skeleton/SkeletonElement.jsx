import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const SkeletonElement = (props) => {
  const { style, type = 'rect', className } = props;
  return <div className={` ${className} skeleton skeleton--${type} `} style={style}></div>;
};

SkeletonElement.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default SkeletonElement;
