import React from 'react';
import { Route, Switch } from 'react-router';
import './assets/scss/main.scss';
import HomePage from './pages/HomePage/index';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  );
};

export default App;
