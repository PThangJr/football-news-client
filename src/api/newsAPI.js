import axiosClient from './axiosClient';
const newsAPI = {
  getAllNews(params) {
    let { _limit, _page, tournament = '' } = params;
    if (tournament === '/') tournament = '';
    const url = `/news${tournament}`;
    return axiosClient.get(url, {
      params: {
        _limit,
        _page,
      },
    });
  },
};
export default newsAPI;
