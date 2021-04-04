import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../pages/HomePage/modalSlice';
import Login from './Login';
import Register from './Register';
import './style.scss';
const Auth = () => {
  // const modal = useSelector((state) => state.modal);
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
      // if (modal.length === 1) handleCloseAuthForm();
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
        <Login handleChangeAuthForm={handleChangeAuthForm} handleCloseAuthForm={handleCloseAuthForm} />
        <Register handleChangeAuthForm={handleChangeAuthForm} handleCloseAuthForm={handleCloseAuthForm} />
      </div>
    </div>
  );
};

export default Auth;
