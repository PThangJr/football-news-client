import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';
const CardItem = (props) => {
  const { col, linkTo, topic, secure_url, title, times, views, likes } = props;
  const { data } = props;
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/285x125';
    }
  };
  return (
    <div className={col}>
      <div className="card">
        <NavLink to={linkTo} className="card-box">
          <div className="card__top">
            <div className="card__image">
              <h3 className="card__image-topic">{topic}</h3>
              <img src={secure_url || 'error'} onError={fallBackImage} alt="news1" className="card__img" />
            </div>
          </div>
          <div className="card__body">
            <div className="card__content">
              <p className="card__content-title">{title}</p>
            </div>
            <div className="card__views">
              <span className="card__views-post">
                <i className="icon-views fas fa-history" />
                {times}
              </span>
              <span className="card__views-numb">
                <i className="icon-views fas fa-eye" />
                {views}
              </span>
              <span className="card__views-liked">
                <i className="icon-views fas fa-thumbs-up" />
                {likes?.length}
              </span>
            </div>
          </div>
        </NavLink>
      </div>
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
  views: PropTypes.string,
  likes: PropTypes.string,
};

export default CardItem;
