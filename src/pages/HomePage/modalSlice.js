import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: [],
  reducers: {
    displayModal(state, action) {
      state.push(action.payload);
    },
    hideModal(state, action) {
      return (state = state.filter((item) => item !== action.payload));
    },
  },
});
const { reducer, actions } = modalSlice;
export const { displayModal, hideModal } = actions;
export default reducer;
