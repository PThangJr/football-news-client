import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const SkeletonElement = (props) => {
  const { cName, style } = props;
  return <div className={`skeleton skeleton--${cName}`} style={style}></div>;
};

SkeletonElement.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default SkeletonElement;
