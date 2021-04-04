import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import commentsAPI from '../../api/commentsAPI';

const initialState = {
  loading: null,
  comments: [],
  errors: null,
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
    if (response) {
      thunkAPI.dispatch(fetchCommentBySlugNew(payload));
    }
    return response;
  } catch (error) {
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
      console.log(action);
      state.loading = false;
      state.comments = action.payload.commentBySlug;
    },
    [fetchCommentBySlugNew.rejected](state, action) {
      state.loading = true;
    },
    [fetchPostComment.fulfilled](state, action) {
      console.log(action);
      // state.comments = action.payload.commentBySlug;
      // newComment.comments.unshift(action.payload.newComment);
      // const newDataComments = {
      //   ...state,
      // };
      // console.log(newDataComments);
      // newDataComments.comments.unshift(action.payload.newComment);
      // // return newDataComments;
      // console.log(newDataComments);
    },
  },
});
export default commentsSlice.reducer;
