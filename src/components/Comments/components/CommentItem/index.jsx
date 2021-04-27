import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import avatar from '../../../../assets/img/fallback_avatar.png';
import './style.scss';
import htmlParser from 'react-html-parser';

const CommentItem = ({ comments, infoUser, handleDeleteItem }) => {
  const fallbackImage = (e) => {
    if (e) {
      e.target.src = avatar;
    }
  };
  const [moreComments, setMoreComments] = useState(null);
  const [displayMoreComments, setDisplayMoreComments] = useState(false);
  useEffect(() => {
    if (comments) {
      const countBr = (`${comments?.content}`.match(/<br \/>/g) || []).length;
      const countCharacter = comments?.content.length >= 800;
      if (countBr >= 8 || countCharacter) {
        setMoreComments(true);
      }
    }
  }, [comments]);
  const handleShowMoreComment = (status) => {
    setDisplayMoreComments(status);
    setMoreComments(!status);
  };
  const renderMoreComments = () => {
    if (moreComments) {
      return (
        <span className="comments-loading" onClick={() => handleShowMoreComment(true)}>
          <i className="fas fa-angle-down"></i>
          Xem thêm
        </span>
      );
    } else if (moreComments === false) {
      return (
        <span className="comments-loading" onClick={() => handleShowMoreComment(false)}>
          <i className="fas fa-angle-up"></i>
          Ẩn bớt
        </span>
      );
    }
  };
  //Format Times
  const createdAtFormat = new Date(comments?.createdAt);
  const momentFormat = moment(createdAtFormat).format('YYYY-MM-DD HH:mm:ss');
  let times = moment(momentFormat, 'YYYY-MM-DD HH:mm:ss').fromNow();
  times = times.replace('a ', '1 ');
  times = times.replace('an ', '1 ');
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
        <div className="comments-content">
          <div
            className={
              'comments-content__text ' +
              (displayMoreComments ? ' comments-content__text--show-all' : '') +
              (moreComments ? ' comments-content__text--block' : '')
            }
          >
            {htmlParser(comments?.content)}
          </div>

          {infoUser?._id === comments?.userId?._id && (
            <span className="icon-box icon--delete" onClick={() => handleDeleteComment(comments._id)}>
              <i className="fas fa-trash-alt"></i>
            </span>
          )}
        </div>
        <div className="comments-footer">
          {renderMoreComments()}
          <span className="comments-time">{times}</span>
        </div>
      </div>
    </li>
  );
};

CommentItem.propTypes = {
  comments: PropTypes.object,
};

export default CommentItem;
