import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { displayAuthForm } from '../../../../features/Auth/authSlice';
import AccountSetting from '../AccountSetting';
import './style.scss';
const Account = () => {
  const dispatch = useDispatch();
  const [statusUser, setStatusUser] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    setStatusUser(user);
  }, []);
  const handleAuthForm = () => {
    dispatch(displayAuthForm('login'));
  };
  const renderAccount = () => {
    if (!statusUser) {
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
          <button className="btn--default sign-in">{statusUser.username}</button>
          <AccountSetting />
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
