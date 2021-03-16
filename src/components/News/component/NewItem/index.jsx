import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
const NewItem = ({ dataNews }) => {
  const { topic, thumbnail, title, views, likes, slug } = dataNews;
  const match = useRouteMatch();
  let { url } = match;
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/285x125';
    }
  };
  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
      <div className="card">
        <NavLink to={`/detail-page${url}/${slug}`} className="card-box">
          <div className="card__top">
            <div className="card__image">
              <h3 className="card__image-title">{topic}</h3>
              <img src={thumbnail || 'error'} onError={fallBackImage} alt="news1" className="card__img" />
            </div>
          </div>
          <div className="card__body">
            <div className="card__content">
              <p className="card__content-description">{title}</p>
            </div>
            <div className="card__views">
              <span className="card__views-post">
                <i className="icon-views fas fa-history" />
                2h
              </span>
              <span className="card__views-numb">
                <i className="icon-views fas fa-eye" />
                {views}
              </span>
              <span className="card__views-liked">
                <i className="icon-views fas fa-thumbs-up" />
                {/* {likes.length} */}
              </span>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
NewItem.propTypes = {
  dataNews: PropTypes.object,
};
NewItem.defaultProps = {
  dataNews: {
    topic: '',
    thumbnail: '123',
    title: '',
    views: '',
    likes: [],
    slug: '',
  },
};

export default NewItem;
