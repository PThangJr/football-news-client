import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import commentsAPI from '../../api/commentsAPI';
import { displayModal } from '../../pages/HomePage/modalSlice';

const initialState = {
  loading: null,
  comments: [],
  errors: null,
  pagination: {
    totalPage: 1,
    totalItem: 1,
  },
};

export const fetchCommentBySlugNew = createAsyncThunk('/comments/slugNew', async (payload, thunkAPI) => {
  try {
    const response = await commentsAPI.getCommentBySlugNew(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const fetchPostComment = createAsyncThunk('/comments/post', async (payload, thunkAPI) => {
  try {
    const response = await commentsAPI.postCommentBySlugNew(payload);

    return response;
  } catch (error) {
    if (error?.status === 401) {
      thunkAPI.dispatch(displayModal('auth'));
    }
    return thunkAPI.rejectWithValue(error);
  }
});
export const fetchDeleteCommentById = createAsyncThunk('/comments/delete', async (payload, thunkAPI) => {
  try {
    const response = await commentsAPI.deleteCommentById(payload);

    return response;
  } catch (error) {
    // console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: {
    [fetchCommentBySlugNew.pending](state, action) {
      state.loading = true;
    },
    [fetchCommentBySlugNew.fulfilled](state, action) {
      // console.log(state);
      state.loading = false;
      state.comments = action.payload.comments;
      state.pagination.totalItem = action.payload.pagination.totalItem;
      state.pagination.totalPage = action.payload.pagination.totalPage;
    },
    [fetchCommentBySlugNew.rejected](state, action) {
      state.loading = true;
    },
    // [fetchPostComment.pending](state, action) {
    //   state.loading = true;
    // },
    [fetchPostComment.fulfilled](state, action) {
      state.comments.unshift(action.payload.newComment);
    },
    [fetchPostComment.rejected](state, action) {
      console.log(action);
    },
    [fetchDeleteCommentById.fulfilled](state, action) {
      // console.log(state, action);

      const newState = { ...state };
      newState.comments = newState.comments.filter((item) => item._id !== action.payload.commentDeleted._id);
      return newState;
    },
  },
});
export default commentsSlice.reducer;
