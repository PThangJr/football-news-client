import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import tournaments from '../../constants/tournaments';
import NotFoundPage from '../../pages/NotFoundPage';
import News from '../News';
import NewDetail from '../News/pages/NewDetail';
import Result from '../Results';
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
          {/* {Object.keys(tournaments).map((item, index) => {
            return <Route key={index} path={`${match.url}news/${item}`} component={News} />;
          })} */}
          {renderRoutes()}
          <Route path={`${match.url}new-detail`} component={NewDetail} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </main>
  );
};

export default Body;
