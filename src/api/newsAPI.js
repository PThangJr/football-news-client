import axiosClient from './axiosClient';
const newsAPI = {
  getAllNews(payload) {
    let { pagination, tournament = '' } = payload;
    if (tournament === '/') tournament = '';
    const url = `/news${tournament}`;
    return axiosClient.get(url, {
      params: pagination,
    });
  },
  getNewBySlug(slug) {
    // console.log(slug);
    const url = `/new-detail/${slug}`;
    return axiosClient.get(url);
  },
};
export default newsAPI;
