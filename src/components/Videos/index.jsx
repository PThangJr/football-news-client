import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFoundPage from '../../pages/NotFoundPage';
import VideoList from './components/VideoList';
import VideoDetail from './pages/VideoDetail';
import './style.scss';
const Videos = () => {
  const { path } = useRouteMatch();
  const { errors } = useSelector((state) => state.dataVideos);
  return (
    <div className="videos">
      {errors?.code === 404 && <NotFoundPage message={errors?.message} />}
      <Switch>
        <Route path={`${path}`} exact component={VideoList} />
        <Route path={`${path}/:slug`} component={VideoDetail} />
      </Switch>
    </div>
  );
};

export default Videos;
