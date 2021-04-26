import React from 'react';
import News from '../../components/News';
import NoRacism from '../../components/NoRacism';
import Tables from '../../components/Tables';
import './style.scss';
const HomePage = () => {
  return (
    <div className="home">
      <News />
      <div className="container-fluid">
        <NoRacism />
        <Tables />
      </div>
    </div>
  );
};

export default HomePage;
