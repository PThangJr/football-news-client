import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import avatar from '../../assets/img/fallback_avatar.png';
import TextareaField from '../Form/form-fields/TextareaField';
import Pagination from '../Pagination';
import { fetchCommentBySlugNew, fetchPostComment } from './commentsSlice';
import CommentItem from './components/CommentItem';
import './style.scss';

const Comments = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // const match = useRouteMatch();
  // console.log(match);
  const pathnameSplit = location.pathname.split('/');
  const slugNew = pathnameSplit[pathnameSplit.length - 1];
  useEffect(() => {
    const config = {
      pagination: {
        _limit: 2,
      },
      slugNew,
    };
    dispatch(fetchCommentBySlugNew(config));
  }, [dispatch, slugNew]);
  const dataComments = useSelector((state) => state.dataComments);
  // console.log(dataComments);
  const [values, setValues] = useState('');
  const handleValues = (values) => {
    setValues(values);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.trim()) {
      console.log('Submit', values);
      try {
        const data = { content: values };
        const config = {
          data,
          slugNew,
        };
        const action = dispatch(fetchPostComment(config));
        const result = unwrapResult(action);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const renderCommentItem = () => {
    if (dataComments.comments?.length > 0) {
      return dataComments.comments.map((item) => {
        return <CommentItem comments={item} key={item._id} />;
      });
    }
  };
  return (
    <div className="comments">
      <h3 className="comments__heading">Bình luận</h3>
      <div className="comments-header">
        <img src={avatar} alt="avatar" className="comments-avatar" />
        <form onSubmit={handleSubmit} action="" className="comments-form">
          <TextareaField
            placeholder="Mời bạn để lại bình luận..."
            name="comments"
            id=""
            maxLength="700"
            rows="5"
            max="20"
            className="comments-textarea"
            value="lorem"
            handleValues={handleValues}
          />

          <button className="btn btn--green">Thêm bình luận</button>
        </form>
      </div>
      <ul className="comments-list">
        <h3 className="comments__heading">Tất cả bình luận</h3>
        {renderCommentItem()}
        <Pagination pageItem={1} page={1} currentPage={1} />
      </ul>
    </div>
  );
};
Comments.propTypes = {
  comments: PropTypes.array,
};
export default Comments;
