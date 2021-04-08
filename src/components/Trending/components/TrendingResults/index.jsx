import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults } from '../../../Results/resultsSlice';
import TrendingResultItem from '../TrendingResultItem';
import './style.scss';
const TrendingResults = () => {
  const dispatch = useDispatch();
  const dataResults = useSelector((state) => state.dataResults);
  const { results, loading } = dataResults;
  console.log(dataResults);
  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);
  return (
    <div className=" trending-results">
      <h3 className=" trending-results__heading">Kết quả trận đấu</h3>
      <ul className=" results-list">
        {results.length > 0 &&
          results.map((result) => {
            return <TrendingResultItem results={result} key={result._id} />;
          })}
      </ul>
    </div>
  );
};

export default TrendingResults;
