import React from 'react';
import './style.scss';
const VideoPlayer = (props) => {
  const { style, title, videoId } = props;
  return (
    <div className="video-player">
      <div className="video-player-box" style={style}>
        <iframe
          className="video-player__screen"
          title={title}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p className="video-player__title">{title}</p>
    </div>
  );
};

export default VideoPlayer;
