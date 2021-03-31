import axiosClient from './axiosClient';

const authAPI = {
  login(data) {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },
  register(data) {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },
  getInfoUser() {
    const url = '/auth/information';
    return axiosClient.get(url);
  },
};
export default authAPI;
