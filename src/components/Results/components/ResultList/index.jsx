import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import NotFoundPage from '../../../../pages/NotFoundPage';
import SkeletonElement from '../../../Loading/Skeleton/SkeletonElement';
import Pagination from '../../../Pagination';
import { fetchTournamentResults } from '../../tournamentResultsSlice';
import ResultItem from '../ResultItem';
import './style.scss';
const ResultList = () => {
  const dispatch = useDispatch();
  const { tournament } = useParams();
  const location = useLocation();
  const { page, limit } = queryString.parse(location.search, { parseNumbers: true });

  const dataTournamentResults = useSelector((state) => state.dataTournamentResults);
  const { tournamentResults, loading, pagination, errors } = dataTournamentResults;
  // console.log(tournament);
  useEffect(() => {
    const config = {
      tournament,
      params: {
        page,
        limit: limit || 8,
      },
    };
    dispatch(fetchTournamentResults(config));
  }, [dispatch, tournament, page, limit]);
  const renderResultItem = () => {
    if (loading) {
      const arr = [];
      for (let i = 0; i < 6; i++) {
        arr.push(i);
      }
      return arr.map((item) => (
        <li key={item} className=" results-item">
          <div className=" results-link">
            <SkeletonElement className="end-time" style={{ width: '110px', height: '16px' }} />
            <div className="results-content">
              <div className="clubs clubs--home">
                <SkeletonElement className="clubs__name" style={{ width: '58%', height: '22px' }} />
                <SkeletonElement className="clubs__logo" type="circle" />
              </div>
              <div className="scores">
                <SkeletonElement className="scores__home" type="circle" />
                <span className="scores__home">-</span>
                <SkeletonElement className="scores__away" type="circle" />
              </div>
              <div className="clubs clubs--away">
                <SkeletonElement className="clubs__logo" type="circle" />
                <SkeletonElement className="clubs__name" style={{ width: '58%', height: '22px' }} />
              </div>
            </div>
          </div>
        </li>
      ));
    } else {
      return tournamentResults.map((result) => {
        return <ResultItem results={result} fullname date key={result._id} />;
      });
    }
  };
  if (errors?.status === 404) {
    return <NotFoundPage message={errors?.data?.error?.message} />;
  }
  return (
    <ul className=" results-list">
      {renderResultItem()}
      <Pagination currentPage={page} totalPage={pagination.totalPage} pageRangeDisplay={5} />
    </ul>
  );
};

export default ResultList;
