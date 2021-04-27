import React from 'react';
import SkeletonElement from '../../../Loading/Skeleton/SkeletonElement';

const TrendingItemSkeleton = (props) => {
  return (
    <li className="results-item results-item--trending">
      <div className="results-link">
        {/* <div className="end-time">{endTime}</div> */}
        <div className="results-content">
          <div className="clubs clubs--home" style={{ width: '100px', height: '20px' }}>
            <SkeletonElement className="clubs__name" style={{ width: '60%', height: '20px' }} />
            <SkeletonElement className="clubs__logo" type="rect" style={{ width: '25px', height: '25px' }} />
          </div>
          <div className="scores">
            <span className="scores__home"></span>
            <span>-</span>
            <span className="scores__home"></span>
          </div>
          <div className="clubs clubs--away" style={{ width: '100px', height: '20px' }}>
            <SkeletonElement className="clubs__logo" type="rect" style={{ width: '25px', height: '25px' }} />
            <SkeletonElement className="clubs__name" style={{ width: '60%', height: '20px' }}></SkeletonElement>
          </div>
        </div>
      </div>
    </li>
  );
};

TrendingItemSkeleton.propTypes = {};

export default TrendingItemSkeleton;
