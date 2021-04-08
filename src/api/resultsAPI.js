import axiosClient from './axiosClient';

const resultsAPI = {
  getAll() {
    const url = '/results';
    return axiosClient.get(url);
  },
};
export default resultsAPI;
