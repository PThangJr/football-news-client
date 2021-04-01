import { configureStore } from '@reduxjs/toolkit';
import infoUserReducer from '../../components/Header/components/infoUserSlice';
import newsReducer from '../../components/News/newsSlice';
import newDetailReducer from '../../components/News/pages/NewDetail/newDetailSlice';
import trendingReducer from '../../components/Trending/TrendingSlice';
import authFormReducer from '../../features/Auth/authFormSlice';
import authoReducer from '../../features/Auth/authoSlice';
import tournamentReducer from '../../features/Sidebar/tournamentSlice';
import displayFormReducer from '../../pages/HomePage/displayFormSlice';
const store = configureStore({
  reducer: {
    dataNews: newsReducer,
    dataNewsTrending: trendingReducer,
    dataNewDetail: newDetailReducer,
    authForm: authFormReducer,
    dataTournaments: tournamentReducer,
    infoUser: infoUserReducer,
    dataAuth: authoReducer,
    displayForm: displayFormReducer,
  },
});
export default store;
