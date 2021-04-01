import { createSlice } from '@reduxjs/toolkit';

const displayFormSlice = createSlice({
  name: 'display',
  initialState: null,
  reducers: {
    changeDisplayForm(state, action) {
      console.log(action);
      return action.payload;
    },
  },
});
const { reducer, actions } = displayFormSlice;
export const { changeDisplayForm } = actions;
export default reducer;
