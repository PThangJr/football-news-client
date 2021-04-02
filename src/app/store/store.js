import { configureStore } from '@reduxjs/toolkit';
import infoUserReducer from '../../components/Header/components/infoUserSlice';
import newsReducer from '../../components/News/newsSlice';
import newDetailReducer from '../../components/News/pages/NewDetail/newDetailSlice';
import trendingReducer from '../../components/Trending/TrendingSlice';
import authReducer from '../../features/Auth/authSlice';
import tournamentReducer from '../../features/Sidebar/tournamentSlice';
import modalReducer from '../../pages/HomePage/modalSlice';
const store = configureStore({
  reducer: {
    dataNews: newsReducer,
    dataNewsTrending: trendingReducer,
    dataNewDetail: newDetailReducer,
    dataTournaments: tournamentReducer,
    infoUser: infoUserReducer,
    dataAuth: authReducer,
    modal: modalReducer,
  },
});
export default store;
