import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../../api/authAPI';
const initialState = {
  loading: null,
  success: null,
  user: null,
};

export const fetchLogin = createAsyncThunk('/login', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.login(payload);
    const { access_token, user } = response;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLogin.pending](state, action) {
      state.errors = null;
      state.user = null;
      state.loading = true;
    },
    [fetchLogin.fulfilled](state, action) {
      console.log(action);
      state.loading = false;
    },
    [fetchLogin.rejected](state, action) {
      state.loading = false;
    },
  },
});
const { reducer } = loginSlice;
export default reducer;
