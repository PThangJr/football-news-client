import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../features/Sidebar';
import './style.scss';
import { darkMode, toggleSidebar } from '../../js/script';
import Auth from '../../features/Auth';
import { useSelector } from 'react-redux';
const HomePage = () => {
  const authForm = useSelector((state) => state.authForm);
  useEffect(() => {
    darkMode();
    toggleSidebar();
  }, []);
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
      {authForm.form && <Auth />}
    </div>
  );
};

export default HomePage;
