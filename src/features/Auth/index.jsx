import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../pages/HomePage/modalSlice';
import Login from './Login';
import Register from './Register';
import './style.scss';
const Auth = () => {
  const authForm = useSelector((state) => state.authForm);
  const [displayForm, setDisplayForm] = useState('login');
  const dispatch = useDispatch();
  const handleChangeAuthForm = (payload) => {
    setDisplayForm(payload);
  };
  const handleCloseAuthForm = () => {
    dispatch(hideModal('auth'));
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
      {/* <div className="overlay "></div> */}
      <div
        className={
          displayForm === 'login' ? 'auth__box' : displayForm === 'register' ? 'auth__box rotate-y-180' : 'auth__box'
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
  );
};

export default Auth;
