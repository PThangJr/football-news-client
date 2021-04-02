import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginAuth } from '../../../../features/Auth/authSlice';
import { displayModal } from '../../../../pages/HomePage/modalSlice';
import './style.scss';
const Account = () => {
  const dispatch = useDispatch();
  const infoUser = useSelector((state) => state.dataAuth).user;

  useEffect(() => {
    dispatch(fetchLoginAuth.fulfilled());
  }, [dispatch]);

  const handleAuthForm = () => {
    dispatch(displayModal('auth'));
  };
  const handleInfoUser = () => {
    // dispatch(changeDisplayForm({ infoUser: true }));
    dispatch(displayModal('infoUser'));
  };
  const renderAccount = () => {
    if (!infoUser?.username) {
      return (
        <div className="account" onClick={handleAuthForm}>
          <span className="account__logo">
            <i className="icon-views fas fa-user" />
          </span>
          <button className="btn--default sign-in">Đăng nhập</button>
        </div>
      );
    } else {
      return (
        <div className="account" onClick={handleInfoUser}>
          <span className="account__logo">
            {infoUser?.avatar?.secure_url && (
              <img src={`${infoUser?.avatar.secure_url}`} alt="avatar" className="avatar" />
            )}
            {!infoUser?.avatar.secure_url && <i className="icon-views fas fa-user" />}
          </span>
          <button className="btn--default sign-in">{infoUser.username}</button>
          {/* <AccountSetting infoUser={infoUser} /> */}
        </div>
      );
    }
  };
  return (
    <>
      {renderAccount()}
      {/* <HeaderSetting accountDisplay={accountDisplay} handleLogout={handleLogout} /> */}
    </>
  );
};

export default Account;
