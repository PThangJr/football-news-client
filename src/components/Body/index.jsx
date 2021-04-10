import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import News from '../News';
import NewDetail from '../News/pages/NewDetail';
import Results from '../Results';
import Schedule from '../Schedule';
import TrendingResults from '../Trending/components/TrendingResults';
import Videos from '../Videos';
import './style.scss';
const Body = () => {
  const match = useRouteMatch();
  // console.log(match);
  // console.log(Object.keys(tournaments));
  // const dataTournaments = useSelector((state) => state.dataTournaments);
  let url = match.url;
  // console.log(url);
  return (
    <div className="tournaments">
      <ul className="tabs">
        <li className="tabs-item">
          <NavLink className="tabs-item__link" exact activeClassName="tabs-item__link--active" to={`${match.url}`}>
            News
          </NavLink>
        </li>
        <li className="tabs-item">
          <NavLink className="tabs-item__link" activeClassName="tabs-item__link--active" to={`${match.url}/results`}>
            Kết quả
          </NavLink>
        </li>
        <li className="tabs-item">
          <NavLink className="tabs-item__link" activeClassName="tabs-item__link--active" to={`${match.url}/schedule`}>
            Lịch thi đấu
          </NavLink>
        </li>
        <li className="tabs-item">
          <NavLink className="tabs-item__link" activeClassName="tabs-item__link--active" to={`${match.url}/videos`}>
            Videos
          </NavLink>
        </li>
      </ul>
      <div className="tabs-panel">
        <Switch>
          <Route path={`${url}`} exact component={News} />
          <Route path={`${url}/new-detail`} component={NewDetail} />
          <Route path={`${url}/results`} component={Results} />
          <Route path={`${url}/schedule`} component={Schedule} />
          <Route path={`${url}/videos`} component={Videos} />
        </Switch>
      </div>
    </div>
  );
};

export default Body;
