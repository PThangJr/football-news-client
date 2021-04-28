import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItemSkeleton from '../../../Card/CardItemSkeleton';
import { fetchNews } from '../../newsSlice';
import NewItem from '../NewItem';
import './style.scss';
const NewSuggestion = ({ _id = '', maxItem = 1 }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchNews({
        params: {
          limit: maxItem,
          page: 1,
        },
      })
    );
  }, [dispatch, maxItem]);
  const dataNews = useSelector((state) => state.dataNews);

  const renderNewSuggestion = () => {
    if (dataNews.loading) {
      const arr = [];
      for (let i = 0; i < 6; i++) {
        arr.push(i);
      }
      return arr.map((item) => (
        <div key={item} className="col-xl-12 col-lg-4 col-md-4 col-sm-6 col-12">
          <CardItemSkeleton />
        </div>
      ));
    } else {
      if (dataNews.data.length > 0) {
        return dataNews.data
          .filter((item) => item._id !== _id)
          .map((item) => {
            return (
              <div key={item._id + '-new-suggestion'} className="col-xl-12 col-lg-4 col-md-4 col-sm-6">
                <NewItem key={item._id} dataNew={item} />
              </div>
              // <NewItem key={item._id + Math.random()} col="col-xl-12 col-lg-4 col-md-4 col-sm-6" dataNews={item} />
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
