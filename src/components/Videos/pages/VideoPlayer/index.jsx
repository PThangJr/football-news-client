import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Youtube from 'react-youtube';
import SkeletonElement from '../../../Loading/Skeleton/SkeletonElement';
import VideosSuggestion from '../../components/VideosSuggestion';
import './style.scss';
import { fetchVideoDetail } from './videoDetailSlice';
const VideoDetail = () => {
  const dispatch = useDispatch();
  const dataVideoDetail = useSelector((state) => state.dataVideoDetail);
  const { video, loading } = dataVideoDetail;
  const { slug, tournament } = useParams();
  useEffect(() => {
    dispatch(fetchVideoDetail(slug));
  }, [dispatch, slug, tournament]);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          {loading && <SkeletonElement className="video-youtube" />}
          {!loading && <Youtube videoId={video?.videoId} opts={opts} className="video-youtube" />}
        </div>
      </div>
      <h3 className="suggestion__heading">Video khác</h3>
      <div className="row">
        <VideosSuggestion _id={video?._id} maxItem={6} />
      </div>
    </div>
  );
};

export default VideoDetail;
