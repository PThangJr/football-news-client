import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayAuthForm } from '../../../../features/Auth/authSlice';
import AccountSetting from '../AccountSetting';
import { fetchInfoUser } from '../infoUserSlice';
import './style.scss';
const Account = () => {
  const dispatch = useDispatch();
  const [statusUser, setStatusUser] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    dispatch(fetchInfoUser());
  }, [dispatch]);
  const infoUser = useSelector((state) => state.infoUser).infoUser;
  console.log(infoUser?.username);
  const handleAuthForm = () => {
    dispatch(displayAuthForm('login'));
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
        <div className="account">
          <span className="account__logo">
            <i className="icon-views fas fa-user" />
          </span>
          <button className="btn--default sign-in">{infoUser.username}</button>
          <AccountSetting infoUser={infoUser} />
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
