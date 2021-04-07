import { unwrapResult } from '@reduxjs/toolkit';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { displayModal } from '../../../../pages/HomePage/modalSlice';
import Comments from '../../../Comments';
import { fetchCommentBySlugNew, fetchDeleteCommentById, fetchPostComment } from '../../../Comments/commentsSlice';
import CommentForm from '../../../Comments/components/CommentForm';
import CommentList from '../../../Comments/components/CommentList';
import Pagination from '../../../Pagination';
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
        limit: search.limit || 5,
        page: search.page || 1,
      },
      slugNew,
    };
    dispatch(fetchCommentBySlugNew(config));
  }, [dispatch, slugNew, search.limit, search.page]);
  const dataComments = useSelector((state) => state.dataComments);
  const { infoUser } = useSelector((state) => state.dataInfoUser);

  const { comments, loading, pagination } = dataComments;
  // console.log(comments);

  const currentPage = search.page;
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
            limit: 3,
            page: 1,
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
        localStorage.clear();
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
          <Pagination totalPage={pagination.totalPage} pageRangeDisplay={5} currentPage={currentPage} />
        </CommentList>
      </Comments>
    </>
  );
};

NewDetailComments.propTypes = {};

export default NewDetailComments;
