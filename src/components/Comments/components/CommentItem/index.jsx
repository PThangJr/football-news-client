import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../../../assets/img/fallback_avatar.png';

const CommentItem = ({ comments }) => {
  const fallbackImage = (e) => {
    if (e) {
      e.target.src = avatar;
    }
  };
  console.log();
  return (
    <li className="comments-item">
      <img
        src={comments?.userId.avatar?.secure_url || ''}
        onError={fallbackImage}
        alt="avatar"
        className="comments-avatar"
      />
      <div className="comments-box">
        <span className="comments-username">{comments?.userId.username}</span>
        <p className="comments-content">{comments?.content}</p>
        <p className="comments-time">2 giờ trước</p>
      </div>
    </li>
  );
};

CommentItem.propTypes = {
  comments: PropTypes.object,
};

export default CommentItem;
