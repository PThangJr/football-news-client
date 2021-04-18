import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  limit: null,
  page: null,
  search: '',
};
const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    changeQuery(state, action) {
      const newState = { ...state };
      const newObject = Object.assign(newState, action.payload);
      return newObject;
    },
  },
});

export const { changeQuery } = querySlice.actions;
export default querySlice.reducer;
