import React from 'react';
import SkeletonBox from '../../../Loading/Skeleton/SkeletonBox';
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
          <SkeletonBox key={item} className="comments-item">
            <SkeletonElement className="comments-avatar" />
            <div className="comments-box" style={{ width: '100%' }}>
              <SkeletonElement className="comments-username" style={{ width: '100px', height: '22px' }} />
              <SkeletonElement className="comments-content" style={{ width: '100%', height: '70px' }} />
              <SkeletonElement className="comments-time" style={{ width: '80px', height: '14px', marginTop: '8px' }} />
            </div>
          </SkeletonBox>
        );
      });
    }
  };
  return (
    <ul className="comments-list">
      <h3 className="comments__heading">Tất cả bình luận</h3>
      {renderCommentItem()}
      {/* <CommentItem /> */}
      {children}
    </ul>
  );
};

CommentList.propTypes = {};

export default CommentList;
