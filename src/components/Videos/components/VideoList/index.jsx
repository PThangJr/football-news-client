import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import NotFoundPage from '../../../../pages/NotFoundPage';
import CardItemSkeleton from '../../../Card/CardSkeleton';
import Pagination from '../../../Pagination';
import { fetchVideos } from '../../videosSlice';
import VideoItem from '../VideoItem';
const VideoList = () => {
  const { tournament } = useParams();
  const location = useLocation();
  const search = queryString.parse(location.search, { parseNumbers: true });
  let { page, limit } = search;
  // console.log(search);
  const dispatch = useDispatch();
  const dataVideos = useSelector((state) => state.dataVideos);
  const { loading, videos, pagination, errors } = dataVideos;

  useEffect(() => {
    // if (page > pagination.totalPage) {
    //   page = 1;
    // }
    const config = {
      tournament,
      params: {
        limit: limit || 10,
        page: page,
      },
    };
    dispatch(fetchVideos(config));
  }, [dispatch, tournament, page, limit]);
  const renderVideoItem = () => {
    if (loading) {
      return <CardItemSkeleton totalItem={8} videos />;
    } else {
      return videos.map((video) => {
        return <VideoItem key={video._id} video={video} />;
      });
    }
  };
  if (errors?.status === 404) {
    return <NotFoundPage />;
  }
  return (
    <div className="container-fluid">
      <div className="row">{renderVideoItem()}</div>
      <Pagination currentPage={page} totalPage={pagination.totalPage} pageRangeDisplay={5} />
    </div>
  );
};

export default VideoList;
