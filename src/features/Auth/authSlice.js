import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../api/authAPI';

const initialState = {
  loading: null,
  user: null,
  success: null,
};

export const fetchLoginAuth = createAsyncThunk('/loginAuth', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.login(payload);
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('user', JSON.stringify(response.user));
    return response;
  } catch (error) {
    return error;
  }
});
export const fetchRegisterAuth = createAsyncThunk('/registerAuth', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.register(payload);
    console.log(response);
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('user', JSON.stringify(response.user));
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
const authoSlice = createSlice({
  name: 'autho',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLoginAuth.pending](state, action) {
      state.loading = true;
    },
    [fetchLoginAuth.fulfilled](state, action) {
      const access_token = localStorage.getItem('access_token');
      if (access_token) {
        const user = JSON.parse(localStorage.getItem('user'));
        state.user = user;
      } else {
        state.user = action.payload?.user;
      }
      state.loading = false;
      console.log(action);
    },
    [fetchLoginAuth.rejected](state, action) {
      console.log(action);
      localStorage.clear();
      state.loading = false;
      state.user = null;
    },
    [fetchRegisterAuth.pending](state, action) {
      state.loading = true;
    },
    [fetchRegisterAuth.fulfilled](state, action) {
      const access_token = localStorage.getItem('access_token');
      if (access_token) {
        const user = JSON.parse(localStorage.getItem('user'));
        state.user = user;
      } else {
        state.user = action.payload?.user;
      }
      state.loading = false;
      console.log(action);
    },
    [fetchRegisterAuth.rejected](state, action) {
      console.log(action);
      localStorage.clear();
      state.loading = false;
      state.user = null;
    },
  },
});
export default authoSlice.reducer;
