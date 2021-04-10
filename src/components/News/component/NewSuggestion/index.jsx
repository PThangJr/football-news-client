import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonElement from '../../../Loading/Skeleton/SkeletonElement';
import { fetchNews } from '../../newsSlice';
import NewItem from '../NewItem';
import './style.scss';
const NewSuggestion = ({ _id = '', maxItem = 1 }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchNews({
        pagination: {
          limit: maxItem,
          page: 1,
        },
      })
    );
  }, []);
  const dataNews = useSelector((state) => state.dataNews);
  const renderNewSuggestion = () => {
    if (dataNews.loading) {
      const arr = [];
      for (let i = 0; i < 6; i++) {
        arr.push(i);
      }
      return arr.map((item) => {
        return (
          <div key={item} className="new-suggestion">
            <div className="card">
              <div className="card-box">
                <div className="card__top">
                  <div className="card__image">
                    <SkeletonElement className="card__img" />
                  </div>
                </div>
                <div className="card__body">
                  <div className="card__content">
                    <SkeletonElement className="card__content-title" />
                  </div>
                  <div className="card__views">
                    <SkeletonElement style={{ width: '150px', height: '23px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      if (dataNews.data.length > 0) {
        return dataNews.data
          .filter((item) => item._id !== _id)
          .map((item) => {
            return (
              <NewItem key={item._id + Math.random()} col="col-xl-12 col-lg-4 col-md-4 col-sm-6" dataNews={item} />
            );
          });
      }
    }
  };
  return (
    <div className="new-suggestion">
      <h3 className="new-suggestion__heading">Bài viết khác</h3>
      <div className="row">{renderNewSuggestion()}</div>
    </div>
  );
};

export default NewSuggestion;
