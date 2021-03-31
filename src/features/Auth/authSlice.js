import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    displayAuthForm(state, action) {
      state.form = action.payload;
    },
  },
});
const { reducer, actions } = authSlice;
export const { displayAuthForm } = actions;
export default reducer;
