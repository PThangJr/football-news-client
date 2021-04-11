import axiosClient from './axiosClient';

const resultsAPI = {
  getAll(payload) {
    const tournament = payload?.tournament;
    const url = tournament ? `/results/tournament/${tournament}` : '/results';
    return axiosClient.get(url);
  },
  getResultBySlug(slug) {
    const url = `/results/${slug}`;
    return axiosClient.get(url);
  },
};
export default resultsAPI;
