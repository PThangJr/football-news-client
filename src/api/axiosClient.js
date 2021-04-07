import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_LINK_API,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log(config);

    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response);
    return response.data; //Dữ liệu
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error.response);
    return Promise.reject(error.response);
  }
);

export default axiosClient;
