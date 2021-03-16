import queryString from 'query-string';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useLocation, useRouteMatch } from 'react-router';
import tournaments from '../../constants/tournaments';
import NotFoundPage from '../../pages/NotFoundPage';
import News from '../News';
import Pagination from '../Pagination';
import Result from '../Results';
import Trending from '../Trending';
import './style.scss';
const Body = () => {
  const match = useRouteMatch();
  // console.log(Object.keys(tournaments));
  const { total } = useSelector((state) => state.dataNews);
  const location = useLocation();
  const { _page } = queryString.parse(location.search);
  const currentPage = parseInt(_page);
  const page = Math.ceil(total / 3);
  return (
    <main className="body">
      <div className="main-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-12">
              <Trending />
            </div>
            <div className="col-xl-4 col-lg-4 col-12">
              <Result />
            </div>
          </div>
        </div>
      </div>

      <div className="main-body">
        <Switch>
          <Route path={`${match.url}`} exact component={News} />
          {Object.keys(tournaments).map((item, index) => {
            return <Route key={index} path={`${match.url}news/${item}`} component={News} />;
          })}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <div className="main-footer">
        <Pagination page={page} pageItem={5} currentPage={currentPage || 1} />
      </div>
    </main>
  );
};

export default Body;
