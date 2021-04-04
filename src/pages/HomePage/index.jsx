import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InfoUser from '../../components/InfoUser';
import Modal from '../../components/Modal';
import Auth from '../../features/Auth';
import ChangePassword from '../../features/Auth/ChangePassword';
import Sidebar from '../../features/Sidebar';
import { darkMode, toggleSidebar } from '../../js/script';
import NotFoundPage from '../NotFoundPage';
import './style.scss';

const HomePage = () => {
  const modal = useSelector((state) => state.modal);

  useEffect(() => {
    darkMode();
    toggleSidebar();
  }, []);

  // console.log(modal);
  return (
    <div className="wrapper">
      <Sidebar />
      <aside className="sidebar-right">
        <Header />
        <Switch>
          <Route path="/" component={Body} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </aside>
      <div className="modal-exit d-none"> </div>

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
    </div>
  );
};

export default HomePage;
