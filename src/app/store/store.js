import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../../components/Comments/commentsSlice';
import newsReducer from '../../components/News/newsSlice';
import newDetailReducer from '../../components/News/pages/NewDetail/newDetailSlice';
import resultsReducer from '../../components/Results/resultsSlice';
import tournamentResultsReducer from '../../components/Results/tournamentResultsSlice';
import trendingReducer from '../../components/Trending/TrendingSlice';
import videoDetailReducer from '../../components/Videos/pages/VideoPlayer/videoDetailSlice';
import videosReducer from '../../components/Videos/videosSlice';
import authReducer from '../../features/Auth/authSlice';
import tournamentReducer from '../../features/Sidebar/tournamentSlice';
import modalReducer from '../../pages/HomePage/modalSlice';
import queryReducer from '../../pages/HomePage/querySlice';
const store = configureStore({
  reducer: {
    dataNews: newsReducer,
    dataNewsTrending: trendingReducer,
    dataNewDetail: newDetailReducer,
    dataTournaments: tournamentReducer,
    dataAuth: authReducer,
    dataVideos: videosReducer,
    dataVideoDetail: videoDetailReducer,
    dataComments: commentsReducer,
    dataResults: resultsReducer,
    dataTournamentResults: tournamentResultsReducer,
    modal: modalReducer,
    query: queryReducer,
  },
});
export default store;
