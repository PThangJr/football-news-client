import React, { useRef } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import News from '../News';
import NewDetail from '../News/pages/NewDetail';
import Results from '../Results';
import ResultDetail from '../Results/pages/ResultDetail';
import Videos from '../Videos';
import './style.scss';
const Body = () => {
  const { url, path } = useRouteMatch();
  const fieldRef = useRef(null);
  return (
    <div className="tournaments" ref={fieldRef}>
      <ul className="tabs">
        <li className="tabs-item">
          <NavLink className="tabs-item__link" exact activeClassName="tabs-item__link--active" to={`${url}`}>
            <i className="fas fa-star"></i> News
          </NavLink>
        </li>
        <li className="tabs-item">
          <NavLink className="tabs-item__link" activeClassName="tabs-item__link--active" to={`${url}/results`}>
            <i className="fas fa-star"></i>
            Kết quả
          </NavLink>
        </li>

        <li className="tabs-item">
          <NavLink className="tabs-item__link" activeClassName="tabs-item__link--active" to={`${url}/videos`}>
            <i className="fas fa-star"></i>
            Videos
          </NavLink>
        </li>
      </ul>

      <div className="tabs-panel">
        <Switch>
          <Route path={`${path}`} exact component={News} />
          <Route path={`${path}/new-detail/:slug`} component={NewDetail} />
          <Route path={`${path}/results`} exact component={Results} />
          <Route path={`${path}/results/:slug`} component={ResultDetail} />
          {/* <Route path={`${path}/schedule`} component={Schedule} /> */}
          <Route path={`${path}/videos`} component={Videos} />
        </Switch>
      </div>
    </div>
  );
};

export default Body;
