import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resultsAPI from '../../api/resultsAPI';

const initialState = {
  results: [],
  loading: false,
  errors: null,
};

export const fetchResults = createAsyncThunk('/results/', async (payload, thunkAPI) => {
  try {
    const response = await resultsAPI.getAll();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  extraReducers: {
    [fetchResults.pending](state, action) {
      state.loading = true;
    },
    [fetchResults.fulfilled](state, action) {
      // state.results= action.payloads
      state.loading = false;
      //   console.log(action);
      state.results = action.payload.allResults;
    },
    [fetchResults.rejected](state, action) {
      state.loading = false;
      console.log('Result Error: ', action);
    },
  },
});

export default resultsSlice.reducer;
