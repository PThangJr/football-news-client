import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

const Comments = (props) => {
  const { children } = props;
  return (
    <div className="comments">
      <h3 className="comments__heading">Bình luận</h3>
      {children}
    </div>
  );
};
Comments.propTypes = {
  comments: PropTypes.array,
};
export default Comments;
