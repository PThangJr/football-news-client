import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import fallbackAvatar from '../../assets/img/fallback_avatar.png';
import { fetchInfoAuth, fetchUpdateInfoUser } from '../../features/Auth/authSlice';
import { displayModal, hideModal } from '../../pages/HomePage/modalSlice';
import LoadingDotCircle from '../Loading/LoadingDotCircle';
import './style.scss';
const InfoUser = () => {
  const dispatch = useDispatch();
  const { infoUser, loading } = useSelector((state) => state.dataAuth);

  // console.log(loading);
  const modal = useSelector((state) => state.modal);
  const fallbackImage = (e) => {
    if (e) {
      e.target.src = fallbackAvatar;
    }
  };
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState(null);
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      if (modal.length === 1) {
        // console.log(modal);
        // handleCloseInfoUser();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const handleCloseInfoUser = () => {
    dispatch(hideModal('infoUser'));
  };
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Đăng xuất tài khoản?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đăng xuất',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Đăng xuất thành công', '', 'success');
        // dispatch(isLogout());
        dispatch(fetchInfoAuth.rejected());
        handleCloseInfoUser();
      }
    });
  };
  const renderGenderIcon = () => {
    if (infoUser?.gender === 'Nam') {
      return <i className="fas fa-mars"></i>;
    } else if (infoUser?.gender === 'Nữ') {
      return <i className="fas fa-venus"></i>;
    } else {
      return <i className="fas fa-venus-mars"></i>;
    }
  };

  const displayChangePassword = () => {
    // handleDisplayChangePassword(true);
    dispatch(displayModal('changePassword'));
  };
  const handleChangeAvatar = (e) => {
    e.preventDefault();
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const file = e.target.files[0];
    if (file && allowedTypes.includes(file.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
        setFile(file);
        setErrors(null);
      };
      reader.readAsDataURL(file);
    } else {
      setErrors('File is not supported');
      setFile(null);
      setImagePreviewUrl(null);
    }
  };
  const handleSubmitUploadAvatar = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', file);
    data.append('name', 'PThangJr');
    const action = await dispatch(fetchUpdateInfoUser(data));
    const result = unwrapResult(action);
    if (result) {
      dispatch(hideModal('infoUser'));
    }
    // console.log(data);
    setFile(null);
  };
  const handleRemoveAvatar = () => {
    setFile(null);
    setErrors(null);
    setImagePreviewUrl(null);
  };
  return (
    <>
      <div className="info info--user">
        <h3 className="info__heading">
          Thông tin tài khoản
          <span onClick={handleCloseInfoUser}>
            <i className="fas fa-times"></i>
          </span>
        </h3>
        <div className="info-avatar">
          {errors && <span className="info-avatar__errors">(*) {errors}</span>}
          <div className="info-avatar-box">
            <img
              src={imagePreviewUrl || infoUser?.avatar.secure_url || ''}
              onError={fallbackImage}
              alt="avatar"
              className="info-avatar__img"
            />
            {loading && (
              <div className="info-avatar-overlay">
                <LoadingDotCircle type="medium" />
              </div>
            )}
          </div>
          <form action="" className="form-upload" onSubmit={handleSubmitUploadAvatar}>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="form-upload__avatar"
              onChange={handleChangeAvatar}
              disabled={loading}
            />
            <label
              disabled={loading}
              htmlFor="avatar"
              className={'btn btn--sm btn--choose-file ' + (loading ? ' disable' : '')}
            >
              <span className="icon-box">
                <i className="fas fa-upload"></i>
              </span>
              Choose a file
            </label>
            {file && (
              <div className="info-avatar__buttons">
                <button
                  disabled={loading}
                  type="submit"
                  className={'btn btn--sm btn--green btn--upload' + (loading ? ' btn--disabled' : '')}
                >
                  Upload
                </button>
                <button
                  disabled={loading}
                  type="default"
                  className={'btn btn--sm  btn--danger' + (loading ? ' btn--disabled' : '')}
                  onClick={handleRemoveAvatar}
                >
                  Hủy
                </button>
              </div>
            )}
          </form>
        </div>
        <div className="info-content">
          <p className="info-content__username">
            <span className="icon-box">
              <i className="fas fa-user"></i>
            </span>
            {infoUser?.username || '...'}
          </p>
          <p className="info-content__email">
            <span className="icon-box">
              <i className="fas fa-envelope"></i>
            </span>
            {infoUser?.email || '...'}
          </p>
          <p className="info-content__age">
            <span className="icon-box">
              <i className="fas fa-calendar-alt"></i>
            </span>
            {infoUser?.age || '...'}
            <span className="text"></span>
          </p>
          <p className="info-content__gender">
            <span className="icon-box">{renderGenderIcon()}</span>
            {infoUser?.gender || '....'}
          </p>
        </div>
        <div className="info-buttons">
          <button className="btn btn--green btn--full-wd " onClick={displayChangePassword}>
            <span className="icon-box">
              <i className="fas fa-unlock-alt"></i>
            </span>
            Đổi mật khẩu
          </button>
          <button onClick={handleLogout} className="btn btn--orange btn--full-wd ">
            <span className="icon-box">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            Đăng xuất
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoUser;
