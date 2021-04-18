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

SkeletonBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  style: PropTypes.object,
};

export default SkeletonBox;
