import authAPI from '../../api/authAPI';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  loading: null,
  // infoUser: {},
  infoUser: {
    avatar: {
      public_id: '',
      secure_url: '',
    },
    username: '',
    email: '',
    gender: '',
    age: '',
  },
};

export const fetchInfoUser = createAsyncThunk('/information', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.getInfoUser();
    // console.log(response);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
export const fetchUpdateAvatarUser = createAsyncThunk('/information/avatar', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.updateAvatar(payload);
    console.log(response);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
const infoUserSlice = createSlice({
  name: 'infoUser',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchInfoUser.pending](state, action) {
      state.loading = true;
    },
    [fetchInfoUser.fulfilled](state, action) {
      state.loading = false;
      state.infoUser = action.payload.infoUser;
    },
    [fetchInfoUser.rejected](state, action) {
      state.loading = false;
      localStorage.clear();
      state.infoUser = {
        avatar: {
          public_id: '',
          secure_url: '',
        },
        username: '',
        email: '',
        gender: '',
        age: '',
      };
    },
    [fetchUpdateAvatarUser.pending](state, action) {
      state.loading = true;
    },
    [fetchUpdateAvatarUser.fulfilled](state, action) {
      state.loading = false;
      // console.log(action);
      state.infoUser = action.payload.userUpdated;
      // state.infoUser.avatar = action.payload.userUpdated.avatar;
      // Object.assign(state.infoUser, action.payload.userUpdated);
      // const newAvatar = { ...action.payload.userUpdated.avatar };
      // let newState = { ...state };
      // newState = {
      //   ...newState,
      //   loading: false,
      //   infoUser: {
      //     ...newState.infoUser,
      //     avatar: {
      //       ...newAvatar,
      //       secure_url: newAvatar.secure_url + '#' + Date.now(),
      //     },
      //   },
      // };
      // return newState;
    },
    [fetchUpdateAvatarUser.rejected](state, action) {
      state.loading = true;
      console.log('errors', action);
    },
  },
});
export default infoUserSlice.reducer;
