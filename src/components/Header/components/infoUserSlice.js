import authAPI from '../../../api/authAPI';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  loading: null,
  infoUser: null,
};

export const fetchInfoUser = createAsyncThunk('/information', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.getInfoUser();
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
    [fetchInfoUser.pending](state, action) {
      state.loading = false;
    },
  },
});
export default infoUserSlice.reducer;
