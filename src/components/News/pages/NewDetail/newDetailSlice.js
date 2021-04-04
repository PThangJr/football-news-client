import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newsAPI from '../../../../api/newsAPI';
const initialState = {
  data: null,
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
      state.errors = action.payload.data.error;
    },
  },
});
const { reducer } = newDetailSlice;
export default reducer;
