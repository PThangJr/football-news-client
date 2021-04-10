import React, { useEffect } from 'react';
import parseHTML from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import NotFoundPage from '../../../../pages/NotFoundPage';
import SkeletonElement from '../../../Loading/Skeleton/SkeletonElement';
import NewSuggestion from '../../component/NewSuggestion';
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
          limit: 10,
          page: 1,
        },
      })
    );
  }, [dispatch, slug]);

  const { data, loading, errors } = useSelector((state) => state.dataNewDetail);
  // console.log(dataNews);

  const { title, description, content, views, likes, _id } = data;
  // console.log(data);
  const handleLikeNew = async () => {
    try {
      console.log('click');
    } catch (error) {
      console.log(error);
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
          {/* <div className="col-xl-3 col-lg-12 col-md-12">
            <div className="new-suggestion">
              <h3 className="new-suggestion__heading">Bài viết khác</h3>
              <div className="row">{renderNewSuggestion()}</div>
            </div>
          </div> */}
          <div className="col-xl-3 col-lg-4 col-md-12">
            <NewSuggestion maxItem={10} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
            <div className="detail-left">
              <div className="detail-header">
                <h3 className="detail__heading">
                  {title}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas ipsum, soluta ex debitis
                  vitae sunt ratione dolore hic natus, dignissimos doloremque dolor blanditiis nobis cupiditate id
                  eveniet itaque repellendus?
                </h3>
                <div className="detail-info">
                  <p className="detail-views">
                    <span>Views: </span>
                    <span>{views}</span>
                    <span>Likes: </span>
                    <span>{likes?.length}</span>
                  </p>
                  <p className="detail-buttons">
                    <span className={'icon-like icon-like--active'} onClick={handleLikeNew}>
                      <i className="fas fa-thumbs-up"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div className="detail-body">
                <h4 className="detail-description">{description}</h4>
                {parseHTML(content)}
              </div>
              <div className="detail-footer">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <NewDetailComments maxItem={10} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-12 col-md-12">
            <div className="new-suggestion">
              <h3 className="new-suggestion__heading">Bài viết khác</h3>
              <div className="row">{renderNewSuggestion()}</div>
            </div>
          </div> */}
          <div className="col-xl-3 col-lg-12 col-md-12">
            <NewSuggestion _id={_id} />
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
