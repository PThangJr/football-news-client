import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../api/authAPI';

const initInfoUser = {
  avatar: {
    public_id: '',
    secure_url: '',
  },
  username: '',
  email: '',
  role: '',
  gender: '',
  age: '',
  fullname: '',
};
const initialState = {
  loading: null,
  infoUser: initInfoUser,
  success: null,
};

export const fetchLoginAuth = createAsyncThunk('/loginAuth', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.login(payload);
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('user', JSON.stringify(response.user));
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
export const fetchRegisterAuth = createAsyncThunk('/registerAuth', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.register(payload);
    // console.log(response);
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('user', JSON.stringify(response.user));
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
export const fetchInfoAuth = createAsyncThunk('/information/auth', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.getInfoUser();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const fetchUpdateInfoUser = createAsyncThunk('/information/update', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.updateInfoUser(payload);
    console.log(response);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
export const fetchChangePassword = createAsyncThunk('/password', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.changePassword(payload);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // Login
    [fetchLoginAuth.pending](state, action) {
      state.loading = true;
    },
    [fetchLoginAuth.fulfilled](state, action) {
      console.log(action);

      state.infoUser = action.payload?.user;
      state.loading = false;
      // console.log(action);
    },
    [fetchLoginAuth.rejected](state, action) {
      console.log(action);
      localStorage.clear();
      state.loading = false;
      state.infoUser = null;
    },

    // End Login
    //Register
    [fetchRegisterAuth.pending](state, action) {
      state.loading = true;
    },
    [fetchRegisterAuth.fulfilled](state, action) {
      console.log(action);

      state.infoUser = action.payload?.user;
      state.loading = false;
      // console.log(action);
    },
    [fetchRegisterAuth.rejected](state, action) {
      // console.log(action);
      localStorage.clear();
      state.loading = false;
      state.infoUser = initInfoUser;
    },
    // End Register

    // Information User
    [fetchInfoAuth.pending](state, action) {
      state.loading = true;
    },
    [fetchInfoAuth.fulfilled](state, action) {
      state.loading = false;
      console.log(action);
      state.infoUser = action.payload.infoUser;
    },
    [fetchInfoAuth.rejected](state, action) {
      state.loading = false;
      localStorage.clear();
      state.infoUser = initInfoUser;
    },
    //End Information User
    //Update InfoUser
    [fetchUpdateInfoUser.pending](state, action) {
      state.loading = true;
    },
    [fetchUpdateInfoUser.fulfilled](state, action) {
      state.loading = false;
      console.log('action');
      state.infoUser = action.payload.userUpdated;
    },
    [fetchUpdateInfoUser.rejected](state, action) {
      state.loading = false;
      localStorage.clear();
      state.infoUser = initInfoUser;
    },
  },
});
export default authSlice.reducer;
