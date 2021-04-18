import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../videosSlice';
import { useParams } from 'react-router';
import VideoItem from '../VideoItem';

const VideosSuggestion = (props) => {
  const { _id, maxItem = 1 } = props;
  const dispatch = useDispatch();
  const { tournament } = useParams();
  useEffect(() => {
    dispatch(
      fetchVideos({
        tournament,
        params: {
          limit: maxItem,
        },
      })
    );
  }, [dispatch, tournament, maxItem]);
  const dataVideos = useSelector((state) => state.dataVideos);

  // console.log(dataVideos);
  return (
    <>
      {dataVideos?.videos
        .filter((video) => video._id !== _id)
        .map((video) => {
          return <VideoItem key={video._id} video={video} videos />;
        })}
    </>
  );
};

VideosSuggestion.propTypes = {
  _id: PropTypes.string,
  maxItem: PropTypes.number,
};

export default VideosSuggestion;
