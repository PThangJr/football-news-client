import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import fallbackAvatar from '../../assets/img/fallback_avatar.png';
import { fetchLoginAuth } from '../../features/Auth/authSlice';
import { displayModal, hideModal } from '../../pages/HomePage/modalSlice';
import './style.scss';
const InfoUser = ({ close }) => {
  const dispatch = useDispatch();
  const infoUser = useSelector((state) => state.dataAuth).user;
  const modal = useSelector((state) => state.modal);
  const fallbackImage = (e) => {
    if (e) {
      e.target.src = fallbackAvatar;
    }
  };

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
        dispatch(fetchLoginAuth.rejected());
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
  return (
    <>
      <div className="info info--user">
        <h3 className="info__heading">Thông tin tài khoản</h3>
        <div className="info-avatar">
          <img
            src={infoUser?.avatar.secure_url || ''}
            onError={fallbackImage}
            alt="avatar"
            className="info-avatar__img"
          />
          <form action="" className="form-upload">
            <input type="file" name="avatar" id="avatar" className="form-upload__avatar" />
            <label htmlFor="avatar" className="btn btn--sm btn--upload">
              <span className="icon-box">
                <i className="fas fa-upload"></i>
              </span>
              Choose a file
            </label>
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
