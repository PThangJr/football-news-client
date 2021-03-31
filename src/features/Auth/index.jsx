import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayAuthForm } from './authSlice';
import Login from './Login';
import Register from './Register';
import './style.scss';
const Auth = () => {
  const authForm = useSelector((state) => state.authForm);
  const dispatch = useDispatch();
  const handleChangeAuthForm = (payload) => {
    dispatch(displayAuthForm(payload));
  };
  const handleCloseAuthForm = () => {
    dispatch(displayAuthForm(null));
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      handleCloseAuthForm();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="auth">
      <div className="auth__overlay "></div>
      <div className="auth__flex">
        <div
          className={
            authForm.form === 'login'
              ? 'auth__box'
              : authForm.form === 'register'
              ? 'auth__box rotate-y-180'
              : 'auth__box'
          }
        >
          <Login
            authForm={authForm}
            handleChangeAuthForm={handleChangeAuthForm}
            handleCloseAuthForm={handleCloseAuthForm}
          />
          <Register
            authForm={authForm}
            handleChangeAuthForm={handleChangeAuthForm}
            handleCloseAuthForm={handleCloseAuthForm}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
