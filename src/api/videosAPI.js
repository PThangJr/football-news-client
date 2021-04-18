import axiosClient from './axiosClient';
const videosAPI = {
  getVideos(payload) {
    let { params, tournament = '' } = payload;
    if (tournament === '/') tournament = '';
    const url = `/videos/${tournament}`;
    return axiosClient.get(url, {
      params,
    });
  },
  getVideoBySlug(videoSlug) {
    const url = `/videos/video-detail/${videoSlug}`;
    return axiosClient.get(url);
  },
};
export default videosAPI;
