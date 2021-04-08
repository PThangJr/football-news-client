import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SkeletonElement from '../Loading/Skeleton/SkeletonElement';
import TrendingItem from './components/TrendingItem';
import Results from '../Results';
import './style.scss';
import { fetchNewsTrending } from './TrendingSlice';
import TrendingResults from './components/TrendingResults';
const Trending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNewsTrendingData = async () => {
      try {
        await dispatch(
          fetchNewsTrending({
            pagination: {
              limit: 6,
              page: 1,
            },
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsTrendingData();
  }, [dispatch]);
  const { data, loading } = useSelector((state) => state.dataNewsTrending);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // adaptiveHeight: true,
    // variableWidth: true,
    // cssEase: 'linear',
  };
  const displayTrending = () => {
    if (loading) {
      return <SkeletonElement style={{ width: '100%', height: '400px' }} />;
    } else {
      return (
        <Slider {...settings}>
          {data.length > 0 &&
            data.map((item, index) => {
              return <TrendingItem trendingData={item} key={index} />;
            })}
        </Slider>
      );
    }
  };
  return (
    <div className="row">
      <div className="col-xl-8 col-lg-8 col-12">
        <div className="trending">
          <ul className="trending-list">{displayTrending()}</ul>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-12">
        <TrendingResults />
      </div>
    </div>
  );
};

export default Trending;
