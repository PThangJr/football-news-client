import React from 'react';
import PropTypes from 'prop-types';

const SkeletonBox = (props) => {
  const { className, children, style } = props;
  return (
    <div className={` skeleton-box skeleton-box--${className} `} style={style}>
      {children}
    </div>
  );
};

SkeletonBox.propTypes = {};

export default SkeletonBox;
