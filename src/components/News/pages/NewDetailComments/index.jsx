import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Comments from '../../../Comments';
import Pagination from '../../../Pagination';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentBySlugNew, fetchDeleteCommentById, fetchPostComment } from '../../../Comments/commentsSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import CommentForm from '../../../Comments/components/CommentForm';
import CommentList from '../../../Comments/components/CommentList';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { displayModal } from '../../../../pages/HomePage/modalSlice';

const NewDetailComments = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const pathnameSplit = location.pathname.split('/');
  const slugNew = pathnameSplit[pathnameSplit.length - 1];
  const search = queryString.parse(location.search, { parseNumbers: true });
  const [isSubmitting, setIsSubmitting] = useState(null);
  useEffect(() => {
    const config = {
      pagination: {
        _limit: search._limit || 3,
        _page: search._page || 1,
      },
      slugNew,
    };
    dispatch(fetchCommentBySlugNew(config));
  }, [dispatch, slugNew, search._limit, search._page]);
  const dataComments = useSelector((state) => state.dataComments);
  const infoUser = useSelector((state) => state.dataAuth).user;

  const { comments, total, loading } = dataComments;
  const page = Math.ceil(total / 3);
  const currentPage = search._page;
  const onHandleSubmit = async (values) => {
    console.log('values Submit', values);
    if (values.trim()) {
      console.log('Submit', values);
      try {
        const data = { content: values };
        const config = {
          data,
          slugNew,
          pagination: {
            _limit: 3,
            _page: 1,
          },
        };
        setIsSubmitting(true);
        const action = await dispatch(fetchPostComment(config));
        const result = unwrapResult(action);
        if (result) {
          setIsSubmitting(false);
        }
        console.log(result);
      } catch (error) {
        console.log(error);
        setIsSubmitting(null);
        dispatch(displayModal('auth'));
      }
    }
  };
  const disabled = isSubmitting ? true : isSubmitting === false ? false : false;
  const handleDeleteItem = async (commentId) => {
    console.log(commentId);
    try {
      const click = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });
      if (click.isConfirmed) {
        const action = await dispatch(fetchDeleteCommentById({ commentId }));
        const result = unwrapResult(action);
        if (result) {
          // console.log(result);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Comments>
        <CommentForm avatarUser={infoUser?.avatar.secure_url} onHandleSubmit={onHandleSubmit} disabled={disabled} />
        <CommentList comments={comments} loading={loading} infoUser={infoUser} handleDeleteItem={handleDeleteItem}>
          <Pagination page={page} pageItem={3} currentPage={currentPage} />
        </CommentList>
      </Comments>
    </>
  );
};

NewDetailComments.propTypes = {};

export default NewDetailComments;