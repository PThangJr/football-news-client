import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../../components/News/newsSlice';
import trendingReducer from '../../components/Trending/TrendingSlice';
import newDetailReducer from '../../components/News/pages/NewDetail/newDetailSlice';
import loginReducer from '../../features/Auth/Login/loginSlice';
import authReducer from '../../features/Auth/authSlice';
import tournamentReducer from '../../features/Sidebar/tournamentSlice';
const store = configureStore({
  reducer: {
    dataNews: newsReducer,
    dataNewsTrending: trendingReducer,
    dataNewDetail: newDetailReducer,
    dataLogin: loginReducer,
    authForm: authReducer,
    dataTournaments: tournamentReducer,
  },
});
export default store;
