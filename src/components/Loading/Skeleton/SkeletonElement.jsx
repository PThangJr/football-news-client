import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const SkeletonElement = (props) => {
  const { width, height, cName } = props;
  return <div className={`skeleton ${cName}`} style={{ width, height }}></div>;
};

SkeletonElement.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default SkeletonElement;
