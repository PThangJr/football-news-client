import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import videosAPI from '../../../../api/videosAPI';
const initialState = {
  loading: null,
  video: {},
  errors: null,
};

export const fetchVideoDetail = createAsyncThunk('/videos/video-detail', async (payload, thunkAPI) => {
  try {
    const response = await videosAPI.getVideoBySlug(payload);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const videoDetailSlice = createSlice({
  name: 'video-detail',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVideoDetail.pending](state, action) {
      // state.data = action.payload;
      state.loading = true;
      state.errors = null;
    },
    [fetchVideoDetail.fulfilled](state, action) {
      state.video = action.payload.video;
      state.loading = false;
      state.errors = null;
    },
    [fetchVideoDetail.rejected](state, action) {
      state.loading = true;
      state.errors = action.payload;
    },
  },
});
const { reducer } = videoDetailSlice;
export default reducer;
