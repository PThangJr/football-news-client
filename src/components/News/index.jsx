import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import SkeletonElement from '../Loading/Skeleton/SkeletonElement';
import Pagination from '../Pagination';
import NewItem from './component/NewItem';
import { fetchNews } from './newsSlice';
import './style.scss';
const News = () => {
  // const dataNews = {};
  const dispatch = useDispatch();
  const location = useLocation();
  const { _limit, _page } = queryString.parse(location.search);

  // *** Phân trang
  const { total } = useSelector((state) => state.dataNews);
  const currentPage = parseInt(_page);
  const page = Math.ceil(total / 8);
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
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        await dispatch(
          fetchNews({
            tournament: `/${url}`,
            pagination: {
              _limit: _limit || 8,
              _page: _page || 1,
            },
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsData();
  }, [dispatch, url, _page, _limit, currentPage]);

  const dataNews = useSelector((state) => state.dataNews);
  const { data, loading } = dataNews;
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
              <SkeletonElement
                cName="image"
                type="rect"
                style={{ width: '100%', height: '160px', marginBottom: '5px' }}
              />
              <SkeletonElement
                cName="description"
                type="rect"
                style={{ width: '100%', height: '35px', marginBottom: '5px' }}
              />
              <SkeletonElement
                cName="views"
                type="rect"
                style={{ width: '100px', height: '25px', marginBottom: '5px', float: 'right' }}
              />
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
        <Pagination page={page} pageItem={5} currentPage={currentPage || 1} />
      </div>
    </div>
  );
};

export default News;
