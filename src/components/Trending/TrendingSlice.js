import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newsAPI from '../../api/newsAPI';
const initialState = {
  data: [],
  total: null,
  loading: null,
  errors: {},
};

export const fetchNewsTrending = createAsyncThunk('/news/trending', async (payload, thunkAPI) => {
  try {
    const response = await newsAPI.getAllNews(payload);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
const newsSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNewsTrending.pending](state, action) {
      // state.data = action.payload;
      state.loading = true;
    },
    [fetchNewsTrending.fulfilled](state, action) {
      // console.log(action);
      state.data = action.payload.data;
      state.total = action.payload.total;
      state.loading = false;
    },
    [fetchNewsTrending.rejected](state, action) {
      state.loading = true;
    },
  },
});
const { reducer } = newsSlice;
export default reducer;
