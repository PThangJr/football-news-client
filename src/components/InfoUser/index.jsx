import React from 'react';
import './style.scss';
import fallbackAvatar from '../../assets/img/fallback_avatar.png';
const InfoUser = () => {
  const fallbackImage = (e) => {
    if (e) {
      e.target.src = fallbackAvatar;
    }
  };
  return (
    <>
      <div className="overlay"></div>
      <div className="info info--user">
        <h3 className="info__heading">Thông tin tài khoản</h3>
        <div className="info-avatar">
          <img src="" onError={fallbackImage} alt="avatar" className="info-avatar__img" />
          <form action="" className="form-upload">
            <input type="file" name="avatar" id="avatar" className="form-upload__avatar" />
            <label for="avatar" className="btn btn--sm btn--upload">
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
            PThangJr
          </p>
          <p className="info-content__email">
            <span className="icon-box">
              <i className="fas fa-envelope"></i>
            </span>
            pthjrr@gmail.com
          </p>
          <p className="info-content__age">
            <span className="icon-box">
              <i className="fas fa-calendar-alt"></i>
            </span>
            24
          </p>
          <p className="info-content__gender">
            <span className="icon-box">
              <i className="fas fa-venus-mars"></i>
            </span>
            Nam
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoUser;
