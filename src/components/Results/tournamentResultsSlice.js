import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resultsAPI from '../../api/resultsAPI';

const initialState = {
  tournamentResults: [],
  loading: false,
  errors: null,
  pagination: {
    totalPage: 1,
    totalItem: 1,
    limit: 1,
    page: 1,
  },
};

export const fetchTournamentResults = createAsyncThunk('/results/tournament', async (payload, thunkAPI) => {
  try {
    const response = await resultsAPI.getAll(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const tournamentResults = createSlice({
  name: 'tournament-results',
  initialState,
  extraReducers: {
    [fetchTournamentResults.pending](state, action) {
      state.loading = true;
      state.errors = null;
    },
    [fetchTournamentResults.fulfilled](state, action) {
      // state.results= action.payloads
      state.loading = false;
      state.tournamentResults = action.payload.tournamentResults;
      state.pagination = action.payload.pagination;
    },
    [fetchTournamentResults.rejected](state, action) {
      state.loading = false;
      state.errors = action.payload;
      console.log('Result Error: ', action);
    },
  },
});

export default tournamentResults.reducer;
