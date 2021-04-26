import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import videosAPI from '../../api/videosAPI';
const initialState = {
  loading: null,
  videos: [],
  errors: null,
  pagination: {
    limit: 1,
    page: 1,
    total: 1,
  },
};

export const fetchVideos = createAsyncThunk('/videos', async (payload, thunkAPI) => {
  try {
    const response = await videosAPI.getVideos(payload);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVideos.pending](state, action) {
      // state.data = action.payload;
      state.loading = true;
      state.errors = null;
    },
    [fetchVideos.fulfilled](state, action) {
      console.log(action);
      state.videos = action.payload.videos;
      state.pagination = action.payload.pagination;
      state.loading = false;
      state.errors = null;
    },
    [fetchVideos.rejected](state, action) {
      console.log(action);
      state.loading = true;
      state.errors = action.payload?.data?.error;
    },
  },
});
const { reducer } = videosSlice;
export default reducer;
