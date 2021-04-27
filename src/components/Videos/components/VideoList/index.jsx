import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import NotFoundPage from '../../../../pages/NotFoundPage';
import CardItemSkeleton from '../../../Card/CardItemSkeleton';
import Pagination from '../../../Pagination';
import { fetchVideos } from '../../videosSlice';
import VideoItem from '../VideoItem';
const VideoList = () => {
  const params = useParams();
  const { tournament } = params;
  const location = useLocation();
  const search = queryString.parse(location.search, { parseNumbers: true });
  let { page, limit } = search;
  // console.log(search);
  const dispatch = useDispatch();
  const dataVideos = useSelector((state) => state.dataVideos);
  const { loading, videos, pagination, errors } = dataVideos;
  // console.log(pagination);

  useEffect(() => {
    // if (page > pagination.totalPage) {
    //   page = 1;
    // }
    const config = {
      tournament,
      params: {
        limit: limit || 12,
        page: page,
      },
    };
    dispatch(fetchVideos(config));
  }, [dispatch, tournament, page, limit]);
  const renderVideoItem = () => {
    if (loading) {
      const arr = [];
      for (let i = 0; i < 12; i++) {
        arr.push(i);
      }
      return arr.map((item) => (
        <div key={item} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
          <CardItemSkeleton />
        </div>
      ));
    } else {
      return videos.map((video) => {
        return (
          <div key={video._id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <VideoItem video={video} />
          </div>
        );
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
