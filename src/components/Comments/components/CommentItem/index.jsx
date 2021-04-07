import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import avatar from '../../../../assets/img/fallback_avatar.png';
import './style.scss';
const CommentItem = ({ comments, infoUser, handleDeleteItem }) => {
  const fallbackImage = (e) => {
    if (e) {
      e.target.src = avatar;
    }
  };
  //Format Times
  const createdAtFormat = new Date(comments?.createdAt);
  const momentFormat = moment(createdAtFormat).format('YYYY-MM-DD HH:mm:ss');
  let times = moment(momentFormat, 'YYYY-MM-DD HH:mm:ss').fromNow();
  times = times.replace('a ', '1 ');
  //End Format Times
  const handleDeleteComment = (commentId) => {
    handleDeleteItem(commentId);
  };
  return (
    <li className="comments-item">
      <img
        src={comments?.userId?.avatar?.secure_url || ''}
        onError={fallbackImage}
        alt="avatar"
        className="comments-avatar"
      />
      <div className="comments-box">
        <span className="comments-username">{comments?.userId?.username}</span>
        <p className="comments-content">
          {comments?.content}
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consequatur enim adipisci aliquid pariatur!
          Repudiandae sapiente in quibusdam illum vitae veritatis cumque voluptatum sed, consequuntur provident quos
          facilis aliquam eius? */}
          {infoUser?._id === comments?.userId?._id && (
            <span className="icon-box icon--delete" onClick={() => handleDeleteComment(comments._id)}>
              <i className="fas fa-trash-alt"></i>
            </span>
          )}
        </p>
        <p className="comments-time">{times}</p>
      </div>
    </li>
  );
};

CommentItem.propTypes = {
  comments: PropTypes.object,
};

export default CommentItem;
