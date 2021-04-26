import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../../../Card/CardItem';
import { useParams } from 'react-router';

const VideoItem = (props) => {
  const params = useParams();
  const { video } = props;
  let { tournaments } = video;
  if (params.hasOwnProperty('tournament')) {
    tournaments = tournaments.filter((tour) => tour.slug === params?.tournament);
  }
  return (
    <CardItem
      {...video}
      linkTo={`/${tournaments[0]?.slug}/videos/${video?.slug}`}
      linkImage={video?.linkThumbnail}
      topic={video?.author}
      type="video"
    />
  );
};

VideoItem.propTypes = {
  video: PropTypes.object,
};

export default VideoItem;
