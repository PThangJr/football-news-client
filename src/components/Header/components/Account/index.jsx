import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayModal } from '../../../../pages/HomePage/modalSlice';
import { fetchInfoUser } from '../../../InfoUser/infoUserSlice';
import LoadingDotCircle from '../../../Loading/LoadingDotCircle';
import './style.scss';
const Account = () => {
  const dispatch = useDispatch();
  const dataInfoUser = useSelector((state) => state.dataInfoUser);
  // const [imageHash, setImageHash]
  const { infoUser, loading } = dataInfoUser;
  console.log(dataInfoUser);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    dispatch(fetchInfoUser());
  }, [dispatch]);

  const handleAuthForm = () => {
    dispatch(displayModal('auth'));
  };
  const handleInfoUser = () => {
    dispatch(displayModal('infoUser'));
  };
  const renderAccount = () => {
    if (!infoUser?.username && !loading) {
      return (
        <div className="account" onClick={handleAuthForm}>
          <span className="account__logo">
            <i className="icon-views fas fa-user" />
          </span>
          <button className="btn--default sign-in">Đăng nhập</button>
        </div>
      );
    } else {
      if (loading) {
        return <LoadingDotCircle style={{ marginRight: '50px' }} />;
      } else {
        return (
          <div className="account" onClick={handleInfoUser}>
            <span className="account__logo">
              <img src={`${infoUser?.avatar?.secure_url}#${new Date().getTime()}`} alt="avatar" className="avatar" />
              {!infoUser?.avatar?.secure_url && <i className="icon-views fas fa-user" />}
            </span>
            <button className="btn--default sign-in">{infoUser?.username}</button>
          </div>
        );
      }
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
