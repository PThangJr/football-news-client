import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
const TrendingItem = ({ trendingData }) => {
  const { _id, thumbnail, topic, title } = trendingData;
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/820x400';
    }
  };
  return (
    <li className={`trending-item`}>
      <NavLink to={`/detail-page/${_id}`} className="trending-link">
        <img onError={fallBackImage} className="trending-item__img" src={thumbnail} alt="" />
        <div className="trending__description">
          <h3 className="trending__title">{topic}</h3>
          <span className="trending__content">{title}</span>
        </div>
      </NavLink>
    </li>
  );
};
TrendingItem.propTypes = {
  trendingData: PropTypes.object,
};
TrendingItem.defaultProps = {
  trendingData: {
    _id: '',
    thumbnail: '',
    topic: '',
    title: '',
  },
};

export default TrendingItem;
