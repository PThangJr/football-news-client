import axiosClient from './axiosClient';

const commentsAPI = {
  getCommentBySlugNew(payload) {
    const { slugNew, pagination } = payload;
    const url = `/comments/${slugNew}`;
    return axiosClient.get(url, { params: pagination });
  },
  postCommentBySlugNew(payload) {
    const { data, slugNew } = payload;
    const url = `/comments/${slugNew}`;
    return axiosClient.post(url, data);
  },
};
export default commentsAPI;
