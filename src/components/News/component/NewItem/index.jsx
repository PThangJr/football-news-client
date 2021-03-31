import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
const NewItem = ({ dataNews = {}, col = '' }) => {
  const { topic, thumbnail, title, views, likes, slug, tournament } = dataNews;
  const match = useRouteMatch();
  let url = match.url === '/' ? '' : match.url;
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/285x125';
    }
  };
  return (
    <div className={col}>
      <div className="card">
        <NavLink to={`/new-detail/news/${tournament?.slug}/${slug}`} className="card-box">
          <div className="card__top">
            <div className="card__image">
              <h3 className="card__image-title">{topic}</h3>
              <img src={thumbnail?.secure_url || 'error'} onError={fallBackImage} alt="news1" className="card__img" />
            </div>
          </div>
          <div className="card__body">
            <div className="card__content">
              <p className="card__content-description">
                {title}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero asperiores nesciunt eos delectus, ipsam
                corporis commodi? Maxime magni, delectus officiis expedita laboriosam distinctio itaque magnam error
                possimus quis provident recusandae.
              </p>
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
