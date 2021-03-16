import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import SkeletonElement from '../Loading/Skeleton/SkeletonElement';
import NewItem from './component/NewItem';
import { fetchNews } from './newsSlice';
import './style.scss';
import tournaments from '../../constants/tournaments';
import queryString from 'query-string';
const News = () => {
  // const dataNews = {};
  const dispatch = useDispatch();
  const location = useLocation();
  const { _limit, _page } = queryString.parse(location.search);
  const urlSplit = location.pathname.split('/');
  const url = urlSplit[urlSplit.length - 1];
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        await dispatch(
          fetchNews({
            tournament: `/${url}`,
            _limit: _limit || 3,
            _page: _page || 1,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsData();
  }, [dispatch, url, _page, _limit]);
  const dataNews = useSelector((state) => state.dataNews);
  const { data, loading } = dataNews;
  // console.log(data);
  const displaySkeleton = () => {
    if (loading) {
      const array = [];
      for (let i = 0; i < 8; i++) {
        array.push(i);
      }
      return array.map((item, index) => {
        return (
          <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="card">
              <SkeletonElement cName="image" type="rect" width="100%" height="160px" />
              <SkeletonElement cName="description" type="rect" width="95%" height="35px" />
              <SkeletonElement cName="views" type="rect" width="100px" height="25px" />
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div id="news-top" className="news">
      <div className="container-fluid">
        <a href="abc" className="news__link">
          <h3 className="news__heading">{tournaments?.[url] || 'News'}</h3>
        </a>
        <div className="row">
          {displaySkeleton()}
          {!loading &&
            data.map((item) => {
              return <NewItem dataNews={item} key={item._id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default News;
