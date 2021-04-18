import React from 'react';
import SkeletonElement from '../../../Loading/Skeleton/SkeletonElement';
import CommentItem from '../CommentItem';
import './style.scss';
const CommentList = (props) => {
  const { children, comments, loading, infoUser, handleDeleteItem } = props;
  // console.log('loading', loading);
  // console.log('comments', comments);

  const renderCommentItem = () => {
    if (!loading) {
      if (comments?.length > 0) {
        return comments.map((item) => {
          return (
            <CommentItem comments={item} key={item?._id} infoUser={infoUser} handleDeleteItem={handleDeleteItem} />
          );
        });
      }
    } else {
      const arr = [];
      for (let i = 0; i < 3; i++) {
        arr.push(i);
      }
      return arr.map((item) => {
        return (
          <li key={item} className="comments-item">
            <SkeletonElement className="comments-avatar" />
            <div className="comments-box">
              <SkeletonElement className="comments-username" style={{ width: '100px', height: '20px' }} />
              <SkeletonElement className="comments-content" style={{ width: '90%', height: '50px' }} />
              <div className="comments-time">
                <SkeletonElement style={{ width: '90px', height: '16px' }} />
              </div>
            </div>
          </li>
        );
      });
    }
  };
  return (
    <ul className="comments-list">
      <h3 className="comments__heading">Tất cả bình luận</h3>
      <p className="comments__totals">( {comments?.length} lượt bình luận )</p>
      {renderCommentItem()}
      {/* <CommentItem /> */}
      {children}
    </ul>
  );
};

CommentList.propTypes = {};

export default CommentList;
