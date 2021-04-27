import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import './style.scss';
const CardItem = (props) => {
  const { linkTo, topic, linkImage, title, createdAt, views, likes, type, className } = props;
  const createdAtFormat = new Date(createdAt);
  const momentFormat = moment(createdAtFormat).format('YYYY-MM-DD HH:mm:ss');
  let times = moment(momentFormat, 'YYYY-MM-DD HH:mm:ss').fromNow();
  times = times.replace('a ', '1 ');
  times = times.replace('an ', '1 ');
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/285x125';
    }
  };
  return (
    <div className={'card ' + (type === 'video' ? ' card--video ' : '') + (className ? className : '')}>
      {linkTo && (
        <NavLink to={linkTo} className="card-box">
          <div className="card__top">
            <div className="card__image">
              <h3 className="card__image-topic">{topic}</h3>
              <img src={linkImage || 'error'} onError={fallBackImage} alt="news1" className="card__img" />
              {type === 'video' && (
                <span className="icon-play">
                  <i className="far fa-play-circle"></i>
                </span>
              )}
            </div>
          </div>
          <div className="card__body">
            <div className="card__content">
              <p className="card__content-topic show-on-mobile">
                <i className="fas fa-star-half-alt"></i>
                {topic}
              </p>
              <p className="card__content-title">{title}</p>
            </div>
            <div className="card__views">
              <span className="card__views-post">
                <i className="icon-views fas fa-history" />
                {times}
              </span>
              <span className="card__views-numb">
                {!type && <i className="icon-views fas fa-eye" />}
                {views}
              </span>
              <span className="card__views-liked">
                {!type && <i className="icon-views fas fa-thumbs-up" />}
                {likes?.length}
              </span>
            </div>
          </div>
        </NavLink>
      )}
      {!linkTo && (
        <div className="card-box">
          <div className="card__top">
            <div className="card__image">
              <h3 className="card__image-topic">{topic}</h3>
              <img src={linkImage || 'error'} onError={fallBackImage} alt="thumbnail" className="card__img" />
              {type === 'video' && (
                <span className="icon-play">
                  <i className="far fa-play-circle"></i>
                </span>
              )}
            </div>
          </div>
          <div className="card__body">
            <div className="card__content">
              <p className="card__content-topic show-on-mobile">{topic}</p>
              <p className="card__content-title">{title}</p>
            </div>
            <div className="card__views">
              <span className="card__views-post">
                <i className="icon-views fas fa-history" />
                {times}
              </span>
              <span className="card__views-numb">
                {views && <i className="icon-views fas fa-eye" />}
                {views}
              </span>
              <span className="card__views-liked">
                {likes.length > 0 && <i className="icon-views fas fa-thumbs-up" />}
                {likes?.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CardItem.propTypes = {
  col: PropTypes.string,
  linkTo: PropTypes.string,
  topic: PropTypes.string,
  secure_url: PropTypes.string,
  title: PropTypes.string,
  times: PropTypes.string,
  views: PropTypes.number,
  likes: PropTypes.array,
  type: PropTypes.string,
};

export default CardItem;
