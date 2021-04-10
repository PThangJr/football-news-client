import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import TrendingResultItem from '../Trending/components/TrendingResultItem';
import ResultList from './components/ResultList';
import ResultDetail from './pages/ResultDetail';
import { fetchResults } from './resultsSlice';
import './style.scss';
const Result = () => {
  const match = useRouteMatch();
  return (
    <div className="results">
      <Switch>
        <Route path={`${match.url}`} exact component={ResultList} />
        <Route path={`${match.url}/:slug`} component={ResultDetail} />
      </Switch>
    </div>
  );
};

export default Result;
