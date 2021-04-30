import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import './assets/scss/main.scss';
import Body from './components/Body';
import ButtonToTop from './components/Button/ButtonToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoUser from './components/InfoUser';
import Modal from './components/Modal';
import ScrollToTop from './components/ScrollToTop';
import Trending from './components/Trending';
import Videos from './components/Videos';
import Auth from './features/Auth';
import ChangePassword from './features/Auth/ChangePassword';
import Sidebar from './features/Sidebar';
import { darkMode, toggleSidebar } from './js/script';
import HomePage from './pages/HomePage/index';
import NotFoundPage from './pages/NotFoundPage';
const App = () => {
  const modal = useSelector((state) => state.modal);
  const bodyRef = useRef();
  useEffect(() => {
    darkMode();
    toggleSidebar();
  }, []);
  return (
    <div className="wrapper">
      <ScrollToTop />

      <Sidebar />
      <aside className="sidebar-right">
        <Header />
        <main className="body">
          <div className="main-top">
            <div className="container-fluid no-gutters">
              <Trending />
            </div>
          </div>
          <div className="main-body" ref={bodyRef}>
            <ScrollToTop fieldRef={bodyRef} />
            <Switch>
              <Route path="/not-found" component={NotFoundPage} />
              <Route path="/" exact component={HomePage} />
              <Route path="/videos" component={Videos} />
              <Route path="/:tournament" component={Body} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </main>
        <Footer />
        <div className="modal-exit d-none"> </div>
      </aside>

      {modal.includes('auth') && (
        <Modal>
          <Auth />
        </Modal>
      )}
      {modal.includes('infoUser') && (
        <Modal closeForm="infoUser" zIndex="100" position="right">
          <InfoUser />
        </Modal>
      )}
      {modal.includes('changePassword') && (
        <Modal zIndex="200" type="rect">
          <ChangePassword />
        </Modal>
      )}
      <span id="menubar" className="menu hide-on-pc">
        <i className="fas fa-bars"></i>
      </span>
      <ButtonToTop />
    </div>
  );
};

export default App;
