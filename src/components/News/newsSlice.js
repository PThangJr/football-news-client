import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newsAPI from '../../api/newsAPI';
const initialState = {
  data: [],
  total: null,
  loading: null,
  errors: {},
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
    },
    [fetchNews.fulfilled](state, action) {
      // console.log(action);
      state.data = action.payload.data;
      state.total = action.payload.total;
      state.loading = false;
    },
    [fetchNews.rejected](state, action) {
      state.loading = false;
    },
  },
});
const { reducer } = newsSlice;
export default reducer;
