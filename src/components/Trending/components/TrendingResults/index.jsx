import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults } from '../../../Results/resultsSlice';
import TrendingResultItem from '../TrendingResultItem';
import TrendingItemSkeleton from '../TrendingResultItem/TrendingResultItemSkeleton';
import './style.scss';
const TrendingResults = () => {
  const dispatch = useDispatch();
  const dataResults = useSelector((state) => state.dataResults);
  const { results, loading } = dataResults;
  // console.log(dataResults);
  useEffect(() => {
    dispatch(fetchResults());
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
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return <TrendingItemSkeleton key={item} />;
          })}
      </ul>
    </div>
  );
};

export default TrendingResults;
