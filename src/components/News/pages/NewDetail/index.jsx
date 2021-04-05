import React, { useEffect } from 'react';
import parseHTML from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import NotFoundPage from '../../../../pages/NotFoundPage';
import Comments from '../../../Comments';
import LoadingDotCircle from '../../../Loading/LoadingDotCircle';
import SkeletonElement from '../../../Loading/Skeleton/SkeletonElement';
import NewItem from '../../component/NewItem';
import { fetchNews } from '../../newsSlice';
import NewDetailComments from '../NewDetailComments';
import { fetchNewBySlug } from './newDetailSlice';
import './style.scss';
const NewDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const urlSplit = location.pathname.split('/');
  const slug = urlSplit[urlSplit.length - 1];
  // const tournament = urlSplit[urlSplit.length - 2];
  // console.log(slug);

  useEffect(() => {
    dispatch(fetchNewBySlug(slug));
    dispatch(
      fetchNews({
        pagination: {
          _limit: 10,
          _page: 1,
        },
      })
    );
  }, [dispatch, slug]);
  const { data, loading, errors } = useSelector((state) => state.dataNewDetail);
  const dataNews = useSelector((state) => state.dataNews);
  // console.log(errors);
  if (data) {
    var { description, content, created_at, views, likes, _id } = data;
  }
  const handleLikeNew = async () => {
    try {
      console.log('click');
    } catch (error) {
      console.log(error);
    }
  };
  const renderNewSuggestion = () => {
    if (dataNews.loading) {
      const arr = [];
      for (let i = 0; i < 6; i++) {
        arr.push(i);
      }
      return arr.map((item) => {
        return (
          <div key={item} className="skeleton-box">
            <SkeletonElement cName="" type="rect" style={{ width: '100%', height: '100px', marginBottom: '8px' }} />
            <SkeletonElement cName="" type="rect" style={{ width: '100%', height: '45px', marginBottom: '8px' }} />
            <SkeletonElement
              cName=""
              type="rect"
              style={{ width: '100px', height: '25px', marginBottom: '8px', float: 'right' }}
            />
          </div>
        );
      });
    } else {
      if (dataNews.data.length > 0) {
        return dataNews.data
          .filter((item) => item._id !== _id)
          .map((item) => {
            return (
              <NewItem key={item._id + Math.random()} col="col-xl-12 col-lg-4 col-md-4 col-sm-6" dataNews={item} />
            );
          });
      }
    }
  };
  const renderNewDetail = () => {
    if (loading) {
      return (
        <div className="row">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
            <SkeletonElement style={{ marginBottom: '20px', width: '100px', height: '30px' }} />
            <SkeletonElement style={{ marginBottom: '15px', width: '100%', height: '30px' }} />
            <SkeletonElement style={{ marginBottom: '15px', width: '100%', height: '100px' }} />
            <SkeletonElement style={{ marginBottom: '15px', width: '100%', height: '300px' }} />
          </div>
          <div className="col-xl-3 col-lg-12 col-md-12">
            <div className="new-suggestion">
              <h3 className="new-suggestion__heading">Bài viết khác</h3>
              <div className="row">{renderNewSuggestion()}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
            <div className="detail-left">
              <div className="detail-header">
                <div className="detail-header-info">
                  <h3 className="detail__heading">{description}</h3>
                  <p className="detail__created">{created_at}</p>
                  <p className="detail-views">
                    <span>Views: </span>
                    <span>{views}</span>
                    <span>Likes: </span>
                    <span>{likes?.length}</span>
                  </p>
                </div>
                <div className="detail-header-like" onClick={handleLikeNew}>
                  <span className={'icon-like icon-like--active'}>
                    <i className="fas fa-thumbs-up"></i>
                  </span>
                </div>
              </div>
              <div className="detail-body">{parseHTML(content)}</div>
              <div className="detail-footer">
                <NewDetailComments />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-12 col-md-12">
            <div className="new-suggestion">
              <h3 className="new-suggestion__heading">Bài viết khác</h3>
              <div className="row">{renderNewSuggestion()}</div>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="detail">
      {!errors && <div className="container-fluid">{renderNewDetail()}</div>}
      {errors?.message && <NotFoundPage message={errors.message} />}
    </div>
  );
};

export default NewDetail;
