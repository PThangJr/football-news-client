import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import NotFoundPage from '../../pages/NotFoundPage';
import CardItemSkeleton from '../Card/CardItemSkeleton';
import Pagination from '../Pagination';
import NewItem from './component/NewItem';
import { fetchNews } from './newsSlice';
import './style.scss';
const News = () => {
  // const dataNews = {};
  const dispatch = useDispatch();
  const location = useLocation();
  const { tournament } = useParams();
  const params = useParams();
  const dataTournaments = useSelector((state) => state.dataTournaments);
  const dataNews = useSelector((state) => state.dataNews);

  const { limit, page, search } = queryString.parse(location.search, { parseNumbers: true });
  // *** Phân trang
  const currentPage = parseInt(page);
  // ***
  //Get slug tournament from url

  const newHeading = dataTournaments.data.reduce((acc, cur) => {
    let result;
    if (cur.slug === tournament) {
      result = cur.name;
    }
    return acc + (result || '');
  }, '');

  const { data, loading, pagination, errors } = dataNews;
  // console.log(errors);
  useEffect(() => {
    if (tournament || tournament === undefined) {
      dispatch(
        fetchNews({
          tournament,
          params: {
            limit: limit || 8,
            page: page || 1,
            search,
          },
        })
      );
    }
    // else if ()
  }, [dispatch, tournament, page, limit, currentPage, search]);

  // console.log(errors);

  const renderNewItem = () => {
    if (loading) {
      const arr = [];
      for (let i = 0; i < 8; i++) {
        arr.push(i);
      }
      return arr.map((item) => (
        <div key={item} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
          <CardItemSkeleton />
        </div>
      ));
    } else {
      if (data.length > 0) {
        return data.map((newItem) => {
          return (
            <div key={newItem._id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
              <NewItem dataNew={newItem} />
            </div>
          );
        });
      }
    }
  };
  // {errors?.status === 404 && <NotFoundPage />}
  if (errors?.status === 404) {
    return <NotFoundPage message={errors?.data?.error?.message} />;
  }
  return (
    <div id="news-top" className="news">
      <div className="container-fluid">
        <h3 className="news__heading">{newHeading || 'News'}</h3>
        <div className="row">{renderNewItem()}</div>
      </div>
      <div className="news-pagination">
        <Pagination currentPage={currentPage} totalPage={pagination?.totalPage} pageRangeDisplay={5} />
      </div>
    </div>
  );
};

export default News;
