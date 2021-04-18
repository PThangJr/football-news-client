import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import './assets/scss/main.scss';
import ButtonToTop from './components/Button/ButtonToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoUser from './components/InfoUser';
import Modal from './components/Modal';
import Auth from './features/Auth';
import ChangePassword from './features/Auth/ChangePassword';
import Sidebar from './features/Sidebar';
import HomePage from './pages/HomePage/index';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const modal = useSelector((state) => state.modal);
  return (
    <div className="wrapper">
      <Sidebar />
      <aside className="sidebar-right">
        <Header />
        <main className="body">
          <Switch>
            <Route path="/not-found" component={NotFoundPage} />
            <Route path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
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
      <ButtonToTop />
    </div>
  );
};

export default App;
