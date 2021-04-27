import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newsAPI from '../../api/newsAPI';
const initialState = {
  data: [
    {
      views: 0,
      likes: [],
      tournaments: [],
      source: '',
      comments: [],
      content: '',
      title: '',
      topic: '',
      description: '',
      thumbnail: '',
      author: '',
      slug: '',
      createdAt: '',
      updatedAt: '',
    },
  ],
  loading: null,
  errors: null,
  pagination: {
    limit: 0,
    page: 0,
    totalPage: 1,
    totalItem: 1,
  },
};

export const fetchNews = createAsyncThunk('/news', async (payload, thunkAPI) => {
  try {
    const response = await newsAPI.getAllNews(payload);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNews.pending](state, action) {
      // state.data = action.payload;
      state.loading = true;
      state.errors = null;
    },
    [fetchNews.fulfilled](state, action) {
      // console.log(action);
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
      state.errors = null;
    },
    [fetchNews.rejected](state, action) {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});
const { reducer } = newsSlice;
export default reducer;
