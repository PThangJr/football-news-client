import React from 'react';
import { Route, Switch } from 'react-router';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../features/Sidebar';
import './style.scss';
const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
