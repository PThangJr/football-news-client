import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tournamentsAPI from '../../api/tournamentsAPI';
const initialState = {
  data: [],
  loading: null,
  errors: null,
};

export const fetchTournament = createAsyncThunk('/tournament', async (payload, thunkAPI) => {
  try {
    const response = await tournamentsAPI.getAll();
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
const tournamentSlice = createSlice({
  name: 'tournaments',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTournament.pending](state, action) {
      // state.data = action.payload;
      state.loading = true;
    },
    [fetchTournament.fulfilled](state, action) {
      state.data = action.payload.tournaments;
      state.loading = false;
    },
    [fetchTournament.rejected](state, action) {
      state.loading = false;
    },
  },
});
const { reducer } = tournamentSlice;
export default reducer;
