import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TrendingItem from './TrendingItem';
const Trending = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: false,
    // autoplaySpeed: 6000,
    // adaptiveHeight: true,
    // variableWidth: true,
    // cssEase: 'linear',
  };
  return (
    <div className="trending">
      <ul className="trending-list">
        <Slider {...settings}>
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
          <TrendingItem />
        </Slider>
      </ul>
    </div>
  );
};

export default Trending;
