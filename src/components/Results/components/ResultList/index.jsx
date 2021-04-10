import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults } from '../../resultsSlice';
import ResultItem from '../ResultItem';
import './style.scss';
const ResultList = () => {
  const dispatch = useDispatch();
  const dataResults = useSelector((state) => state.dataResults);
  const { results, loading } = dataResults;
  console.log(dataResults);
  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);
  return (
    <ul className=" results-list">
      {results.length > 0 &&
        results.map((result) => {
          return <ResultItem results={result} fullname date key={result._id} />;
        })}
    </ul>
  );
};

export default ResultList;
