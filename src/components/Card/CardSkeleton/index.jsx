import React from 'react';
import PropTypes from 'prop-types';
import SkeletonElement from '../../Loading/Skeleton/SkeletonElement';

const CardItemSkeleton = (props) => {
  const { totalItem = 4, videos } = props;

  const renderCardItemSkeleton = () => {
    const array = [];
    for (let i = 0; i < totalItem; i++) {
      array.push(i);
    }
    return array.map((item, index) => {
      return (
        <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
          <div className={'card ' + (videos ? 'card--videos' : '')}>
            <div className="card-box">
              <div className="card__top">
                <div className="card__image">
                  <SkeletonElement className="card__img" />
                </div>
              </div>
              <div className="card__body">
                <div className="card__content">
                  <SkeletonElement className="card__content-title" />
                </div>
                {!videos && (
                  <div className="card__views">
                    <SkeletonElement style={{ width: '140px', height: '20px' }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return <>{renderCardItemSkeleton()} </>;
};
CardItemSkeleton.propTypes = {
  loading: PropTypes.bool,
  totalItem: PropTypes.number,
};

export default CardItemSkeleton;
