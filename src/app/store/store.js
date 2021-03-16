import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../../components/News/newsSlice';
const store = configureStore({
  reducer: {
    dataNews: newsReducer,
  },
});
export default store;
