import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: null,
};
const authFormSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    displayAuthForm(state, action) {
      state.form = action.payload;
    },
  },
});
const { reducer, actions } = authFormSlice;
export const { displayAuthForm } = actions;
export default reducer;
