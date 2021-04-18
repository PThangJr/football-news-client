import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newsAPI from '../../../../api/newsAPI';
import { displayModal } from '../../../../pages/HomePage/modalSlice';
const initialState = {
  data: {
    title: '',
    description: '',
    content: '',
    created_at: '',
    views: '',
    likes: [],
    _id: '',
  },
  loading: null,
  errors: null,
};
export const fetchNewBySlug = createAsyncThunk('/new-detail', async (payload, thunkAPI) => {
  try {
    const response = await newsAPI.getNewBySlug(payload);
    // console.log(response);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;

    return rejectWithValue(error);
  }
});
export const fetchLike = createAsyncThunk('/likes/:slug', async (payload, thunkAPI) => {
  try {
    const response = await newsAPI.newLiked(payload);
    return response;
  } catch (error) {
    console.log(error);
    if (error?.status === 401) {
      thunkAPI.dispatch(displayModal('auth'));
    }
    return thunkAPI.rejectWithValue(error);
  }
});
const newDetailSlice = createSlice({
  name: 'new-detail',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNewBySlug.pending](state, action) {
      state.loading = true;
    },
    [fetchNewBySlug.fulfilled](state, action) {
      state.loading = false;
      state.data = action.payload.data;
    },
    [fetchNewBySlug.rejected](state, action) {
      console.log(action);
      state.loading = true;
      state.errors = action.payload;
    },
    [fetchLike.pending](state, action) {
      // state.loading = true;
    },
    [fetchLike.fulfilled](state, action) {
      // state.loading = false;
      const { userId } = action.payload;
      // if (state.data.likes.includes(action.payload.userId)) {
      //   state.data.likes.concat(state.data.likes.filter((item) => item == action.payload.userId));
      // } else {
      //   state.data.likes.push(action.payload.userId);
      // }
      const newState = { ...state };
      if (newState.data.likes.includes(userId)) {
        newState.data = {
          ...newState.data,
          likes: newState.data.likes.filter((item) => item !== userId),
        };
      } else {
        newState.data = {
          ...newState.data,
          likes: [...newState.data.likes, userId],
        };
      }

      return newState;
      // state.data = action.payload.data;
    },
    [fetchLike.rejected](state, action) {
      console.log(action);
      // state.errors = action.payload;
    },
  },
});
const { reducer } = newDetailSlice;
export default reducer;
