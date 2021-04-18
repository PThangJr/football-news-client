import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
const TrendingItem = ({ trendingData }) => {
  const { slug, thumbnail, topic, title, tournaments } = trendingData;
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/820x400';
    }
  };
  return (
    <li className={`trending-item`}>
      <NavLink to={`/${tournaments[0]?.slug}/new-detail/${slug}`} className="trending-link">
        <img onError={fallBackImage} className="trending-item__img" src={thumbnail?.secure_url} alt="" />
        <div className="trending-item__description">
          <h3 className="trending-item__title">{topic}</h3>
          <span className="trending-item__content">
            {title}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit earum atque modi laborum ut ad
            architecto ab minima totam. Deserunt iste veritatis laborum accusantium autem nihil vel voluptatum ullam!
            Sunt.
          </span>
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
