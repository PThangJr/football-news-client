import React from 'react';

const Account = () => {
  return (
    <div className="account">
      <span className="account__logo">
        <i className="icon-views fas fa-user" />
      </span>
      <button className="btn--default sign-in">Đăng nhập</button>
      {/* <HeaderSetting accountDisplay={accountDisplay} handleLogout={handleLogout} /> */}
    </div>
  );
};

export default Account;
