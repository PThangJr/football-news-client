import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import VideoList from './components/VideoList';
import VideoPlayer from './pages/VideoPlayer';
import './style.scss';

const Videos = () => {
  const { path } = useRouteMatch();

  return (
    <div className="videos">
      <Switch>
        <Route path={`${path}`} exact component={VideoList} />
        <Route path={`${path}/:slug`} component={VideoPlayer} />
      </Switch>
    </div>
  );
};

export default Videos;
