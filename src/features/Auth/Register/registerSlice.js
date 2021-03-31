import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../../api/authAPI';
const initialState = {
  loading: null,
  user: null,
  errors: null,
};

export const fetchRegister = createAsyncThunk('/register', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.register(payload);
    console.log(response);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRegister.pending](state, action) {
      state.loading = true;
    },
    [fetchRegister.fulfilled](state, action) {
      console.log(action);
      state.loading = false;
    },
    [fetchRegister.rejected](state, action) {
      state.loading = false;
      state.errors = action.payload.data;
    },
  },
});
const { reducer } = registerSlice;
export default reducer;
