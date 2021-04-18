import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resultsAPI from '../../../../api/resultsAPI';

const initialState = {
  loading: false,
  result: {},
  errors: {},
};

export const fetchResultDetail = createAsyncThunk('/result/:slug', async (payload, thunkAPI) => {
  try {
    const response = await resultsAPI.getResultBySlug(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
const resultDetailSlice = createSlice({
  name: 'result',
  initialState,
  extraReducers: {
    [fetchResultDetail.pending](state, action) {
      state.loading = true;
    },
    [fetchResultDetail.fulfilled](state, action) {
      state.loading = false;
      console.log(action);
    },
    [fetchResultDetail.rejected](state, action) {
      state.loading = false;
    },
  },
});
export default resultDetailSlice.reducer;
