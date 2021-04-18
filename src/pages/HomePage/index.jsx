import React, { useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router';
import Body from '../../components/Body';
import News from '../../components/News';
import ScrollToTop from '../../components/ScrollToTop';
import Trending from '../../components/Trending';
import { darkMode, toggleSidebar } from '../../js/script';
import SearchPage from '../SearchPage';
import './style.scss';
const HomePage = () => {
  useEffect(() => {
    darkMode();
    toggleSidebar();
  }, []);
  const fieldRef = useRef();
  return (
    <>
      <div className="main-top">
        <div className="container-fluid">
          <Trending />
        </div>
      </div>

      <div className="main-body" ref={fieldRef}>
        <ScrollToTop fieldRef={fieldRef} />
        <Switch>
          <Route path="/news" component={SearchPage} />
          <Route path="/" exact component={News} />
          <Route path="/:tournament" component={Body} />
          {/* {renderRoutes()} */}
        </Switch>
        {/* <News /> */}
      </div>
    </>
  );
};

export default HomePage;
