import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults } from '../../../Results/resultsSlice';
import TrendingResultItem from '../TrendingResultItem';
import TrendingResultItemSkeleton from '../TrendingResultItem/TrendingResultItemSkeleton';
import './style.scss';
const TrendingResults = () => {
  const dispatch = useDispatch();
  const dataResults = useSelector((state) => state.dataResults);
  const { results, loading } = dataResults;
  // console.log(dataResults);
  useEffect(() => {
    const config = {
      params: {
        limit: 18,
        page: 1,
      },
    };
    dispatch(fetchResults(config));
  }, [dispatch]);
  return (
    <div className=" trending-results">
      <h3 className=" trending-results__heading">Kết quả trận đấu</h3>
      <ul className=" results-list">
        {results.length > 0 &&
          !loading &&
          results.map((result) => {
            return <TrendingResultItem results={result} key={result._id + Date.now()} />;
          })}
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((item) => {
            return <TrendingResultItemSkeleton key={item} />;
          })}
      </ul>
    </div>
  );
};

export default TrendingResults;
