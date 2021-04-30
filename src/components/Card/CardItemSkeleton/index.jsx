import React from 'react';
import PropTypes from 'prop-types';
import SkeletonElement from '../../Loading/Skeleton/SkeletonElement';

const CardItemSkeleton = (props) => {
  const { className } = props;

  // return <>{renderCardItemSkeleton()} </>;
  return (
    <div className={'card ' + (className ? className : '')}>
      <div className="card-box">
        <div className="card__top">
          <div className="card__image">
            <SkeletonElement className="card__img" />
          </div>
        </div>
        <div className="card__body">
          <div className="card__content">
            <SkeletonElement className="card__content-topic show-on-mobile" style={{ width: '120px', height: '15px' }}>
              <i className="fas fa-star-half-alt"></i>
            </SkeletonElement>
            <SkeletonElement className="card__content-title" />
          </div>
          <div className="card__views">
            <SkeletonElement style={{ width: '140px', height: '20px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
CardItemSkeleton.propTypes = {
  className: PropTypes.string,
};

export default CardItemSkeleton;
