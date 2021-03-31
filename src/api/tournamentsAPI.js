import axiosClient from './axiosClient';

const tournamentsAPI = {
  getAll() {
    const url = '/tournaments';
    return axiosClient.get(url);
  },
};
export default tournamentsAPI;
