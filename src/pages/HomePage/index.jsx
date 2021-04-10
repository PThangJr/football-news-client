import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import Body from '../../components/Body';
import News from '../../components/News';
import Trending from '../../components/Trending';
import { darkMode, toggleSidebar } from '../../js/script';
import './style.scss';
const HomePage = () => {
  const modal = useSelector((state) => state.modal);
  const match = useRouteMatch();
  const dataTournaments = useSelector((state) => state.dataTournaments);
  const renderRoutes = () => {
    if (dataTournaments.data.length > 0) {
      return dataTournaments.data.map((item) => {
        return <Route key={item._id} path={`${match.url}${item.slug}`} component={Body} />;
      });
    }
  };
  useEffect(() => {
    darkMode();
    toggleSidebar();
  }, []);

  // console.log(modal);
  return (
    <>
      <div className="main-top">
        <div className="container-fluid">
          <Trending />
        </div>
      </div>
      <div className="main-body">
        <Switch>
          <Route path="/" exact component={News} />
          {renderRoutes()}
        </Switch>
        {/* <News /> */}
      </div>
    </>
  );
};

export default HomePage;
