import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import SkeletonBox from '../Loading/Skeleton/SkeletonBox';
import SkeletonElement from '../Loading/Skeleton/SkeletonElement';
import Pagination from '../Pagination';
import NewItem from './component/NewItem';
import { fetchNews } from './newsSlice';
import './style.scss';
const News = () => {
  // const dataNews = {};
  const dispatch = useDispatch();
  const location = useLocation();
  const { limit, page } = queryString.parse(location.search, { parseNumbers: true });

  // *** Phân trang
  const currentPage = parseInt(page);
  // ***
  const dataTournaments = useSelector((state) => state.dataTournaments);
  //Get slug tournament from url
  const urlSplit = location.pathname.split('/');
  const url = urlSplit[urlSplit.length - 1];
  const newHeading = dataTournaments.data.reduce((acc, cur) => {
    let result;
    if (cur.slug === url) {
      result = cur.name;
    }
    return acc + (result || '');
  }, '');

  const dataNews = useSelector((state) => state.dataNews);
  const { data, loading, pagination, errors } = dataNews;
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        await dispatch(
          fetchNews({
            tournament: `/${url}`,
            pagination: {
              limit: limit || 8,
              page: page || 1,
            },
          })
        );
      } catch (error) {
        console.log('hasError', error);
      }
    };
    fetchNewsData();
  }, [dispatch, url, page, limit, currentPage]);

  // console.log(errors);

  const renderNewItem = () => {
    if (loading) {
      const array = [];
      for (let i = 0; i < 8; i++) {
        array.push(i);
      }
      return array.map((item, index) => {
        return (
          <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
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
                    <SkeletonElement style={{ width: '140px', height: '20px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      if (data.length > 0) {
        return data.map((item) => {
          return <NewItem key={item._id} col="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" dataNews={item} />;
        });
      }
    }
  };
  return (
    <div id="news-top" className="news">
      <div className="container-fluid">
        <a href="abc" className="news__link">
          <h3 className="news__heading">{newHeading || 'News'}</h3>
        </a>
        <div className="row">{renderNewItem()}</div>
      </div>
      <div className="news-pagination">
        <Pagination currentPage={currentPage} totalPage={pagination?.totalPage} pageRangeDisplay={5} />
      </div>
    </div>
  );
};

export default News;
