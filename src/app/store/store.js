import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../../components/Comments/commentsSlice';
import newsReducer from '../../components/News/newsSlice';
import newDetailReducer from '../../components/News/pages/NewDetail/newDetailSlice';
import trendingReducer from '../../components/Trending/TrendingSlice';
import authReducer from '../../features/Auth/authSlice';
import tournamentReducer from '../../features/Sidebar/tournamentSlice';
import modalReducer from '../../pages/HomePage/modalSlice';
import resultsReducer from '../../components/Results/resultsSlice';
const store = configureStore({
  reducer: {
    dataNews: newsReducer,
    dataNewsTrending: trendingReducer,
    dataNewDetail: newDetailReducer,
    dataTournaments: tournamentReducer,
    dataAuth: authReducer,
    modal: modalReducer,
    dataComments: commentsReducer,
    dataResults: resultsReducer,
  },
});
export default store;
