import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
const VideoItem = ({ video, col }) => {
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/285x125';
    }
  };
  const { tournament } = video;
  // console.log(slug);
  // const { url } = useRouteMatch();
  // console.log(url);
  return (
    <div className={col || 'col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12' || ''}>
      <div className="card card--videos">
        <Link to={`/${tournament?.slug}/videos/${video?.slug}`} className="card-box">
          <div className="card__top">
            <div className="card__image">
              <h3 className="card__image-topic">KPlus Sports</h3>
              <img src={video?.linkThumbnail || ''} onError={fallBackImage} alt="" className="card__img" />
              <span className="icon-play">
                <i className="far fa-play-circle"></i>
              </span>
            </div>
          </div>
          <div className="card__body">
            <div className="card__content">
              <p className="card__content-title">{video?.title}</p>
            </div>
            {/* <div className="card__views">KPlus Sports</div> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object,
};

export default VideoItem;
