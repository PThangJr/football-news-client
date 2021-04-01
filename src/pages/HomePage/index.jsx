import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InfoUser from '../../components/InfoUser';
import Auth from '../../features/Auth';
import Sidebar from '../../features/Sidebar';
import { darkMode, toggleSidebar } from '../../js/script';
import './style.scss';
const HomePage = () => {
  const authForm = useSelector((state) => state.authForm);

  useEffect(() => {
    darkMode();
    toggleSidebar();
  }, []);
  const displayForm = useSelector((state) => state.displayForm);
  console.log(displayForm);
  return (
    <div className="wrapper">
      <Sidebar />
      <aside className="sidebar-right">
        <Header />
        <Switch>
          <Route path="/" component={Body} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
        <Footer />
      </aside>
      <div className="modal-exit d-none"> </div>
      {(displayForm === 'login' || displayForm === 'register') && <Auth />}
      {displayForm === 'infoUser' && <InfoUser />}
    </div>
  );
};

export default HomePage;
