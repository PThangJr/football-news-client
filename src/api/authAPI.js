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
  changePassword(data) {
    const url = '/auth/password';
    return axiosClient.put(url, data);
  },
};
export default authAPI;
