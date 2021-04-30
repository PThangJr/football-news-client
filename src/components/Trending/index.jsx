import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SkeletonElement from '../Loading/Skeleton/SkeletonElement';
import TrendingItem from './components/TrendingItem';
import TrendingResults from './components/TrendingResults';
import './style.scss';
import { fetchNewsTrending } from './TrendingSlice';
const Trending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNewsTrendingData = async () => {
      try {
        await dispatch(
          fetchNewsTrending({
            params: {
              limit: 6,
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
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    // adaptiveHeight: true,
    // variableWidth: true,
    // cssEase: 'linear',
  };
  const displayTrending = () => {
    if (loading) {
      return <SkeletonElement className="trending-item" style={{ width: '100%' }} />;
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
    <div className="row no-gutters">
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
