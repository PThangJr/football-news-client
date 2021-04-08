import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFoundPage from '../../pages/NotFoundPage';
import News from '../News';
import NewDetail from '../News/pages/NewDetail';
import Results from '../Results';
import Trending from '../Trending';
import './style.scss';
const Body = () => {
  const match = useRouteMatch();
  // console.log(Object.keys(tournaments));
  const dataTournaments = useSelector((state) => state.dataTournaments);
  const renderRoutes = () => {
    if (dataTournaments.data.length > 0) {
      return dataTournaments.data.map((item) => {
        return <Route key={item._id} path={`${match.url}news/${item.slug}`} component={News} />;
      });
    }
  };
  return (
    <main className="body">
      <div className="main-top">
        <div className="container-fluid">
          <Trending />
        </div>
      </div>

      <div className="main-body">
        <Switch>
          <Route path={`${match.url}`} exact component={News} />
          {/* {Object.keys(tournaments).map((item, index) => {
            return <Route key={index} path={`${match.url}news/${item}`} component={News} />;
          })} */}
          {renderRoutes()}
          <Route path={`${match.url}new-detail`} component={NewDetail} />
          <Route path={`${match.url}results/:slug`} component={Results} />
          <Route path={`${match.url}results`} component={Results} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </main>
  );
};

export default Body;
