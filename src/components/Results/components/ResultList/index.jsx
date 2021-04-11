import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { fetchResults } from '../../resultsSlice';
import { fetchTournamentResults } from '../../tournamentResultsSlice';
import ResultItem from '../ResultItem';
import './style.scss';
const ResultList = () => {
  const dispatch = useDispatch();
  const dataTournamentResults = useSelector((state) => state.dataTournamentResults);
  const { tournamentResults, loading } = dataTournamentResults;

  // console.log(dataTournamentResults);
  const match = useRouteMatch();
  const pathSplit = match.path.split('/');
  const tournament = pathSplit[1];
  // console.log(tournament);
  useEffect(() => {
    const config = {
      tournament,
    };
    dispatch(fetchTournamentResults(config));
  }, [dispatch, tournament]);
  return (
    <ul className=" results-list">
      {tournamentResults.length > 0 &&
        tournamentResults.map((result) => {
          return <ResultItem results={result} fullname date key={result._id} />;
        })}
    </ul>
  );
};

export default ResultList;
