import React, { useEffect } from 'react';
import CardItem from '../Card/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { fetchVideos } from '../Videos/videosSlice';
import CardItemSkeleton from '../Card/CardItemSkeleton';
const Tables = () => {
  const dispatch = useDispatch();
  const dataVideos = useSelector((state) => state.dataVideos);
  const { videos, loading } = dataVideos;
  const [videoMain, ...videoSub] = videos;

  // console.log(videoMain);
  useEffect(() => {
    const config = {
      params: {
        limit: 5,
      },
    };
    dispatch(fetchVideos(config));
  }, [dispatch]);
  return (
    <div className="tables">
      <h3 className="tables__heading">Videos nổi bật</h3>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          {loading && <CardItemSkeleton className="table-video" />}
          {!loading && (
            <CardItem
              type="video"
              {...videoMain}
              linkTo={`/${videoMain?.tournaments[0]?.slug}/videos/${videoMain?.slug}`}
              linkImage={videoMain?.linkThumbnail}
              topic={videoMain?.author}
              className="table-video"
            />
          )}
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="row">
            {loading &&
              [1, 2, 3, 4].map((item) => (
                <div key={item} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <CardItemSkeleton />
                </div>
              ))}

            {!loading &&
              videoSub.map((video) => {
                return (
                  <div key={video._id} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <CardItem
                      type="video"
                      {...video}
                      linkTo={`/${video?.tournaments[0]?.slug}/videos/${video?.slug}`}
                      linkImage={video?.linkThumbnail}
                      topic={videoMain?.author}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
