import axiosClient from './axiosClient';
const newsAPI = {
  getAllNews(payload) {
    let { params, tournament = '' } = payload;
    if (tournament === '/') tournament = '';
    const url = `/news/${tournament}`;
    return axiosClient.get(url, {
      params,
    });
  },
  getNewBySlug(slug) {
    // console.log(slug);
    const url = `/new-detail/${slug}`;
    return axiosClient.get(url);
  },
  newLiked(slug) {
    const url = `/new-detail/likes/${slug}`;
    return axiosClient.put(url);
  },
  searchNews(payload) {
    console.log(payload);
    // const { keyword, pagination } = payload;
    const url = `/news/search`;
    return axiosClient.get(url, { params: payload });
  },
};
export default newsAPI;
