import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../api/authAPI';

const initialState = {
  status: null,
  loading: null,
  data: null,
};
export const fetchChangePassword = createAsyncThunk('/auth/password', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.changePassword(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
const updateAuthSlice = createSlice({
  name: 'updateAuth',
  initialState,
  extraReducers: {
    [fetchChangePassword.pending](state, action) {
      state.loading = true;
    },
    [fetchChangePassword.fulfilled](state, action) {
      state.loading = false;
      state.data = action.payload.message;
    },
    [fetchChangePassword.rejected](state, action) {
      state.loading = true;
    },
  },
});
const { reducer } = updateAuthSlice;
export default reducer;
