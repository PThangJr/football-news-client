import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import * as yup from 'yup';
import InputControl from '../../../components/Form/form-controls/InputControl';
import LoadingLinear from '../../../components/Loading/LoadingLinear';
import { hideModal } from '../../../pages/HomePage/modalSlice';
import { fetchLoginAuth } from '../authSlice';
import './style.scss';

const Login = ({ handleChangeAuthForm, handleCloseAuthForm }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({});
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Username không được để trống!')
      .trim()
      .min(3, 'Username không được ngắn hơn 3 ký tự')
      .max(12, 'Username không được dài quá 12 ký tự')
      .matches(/^[a-zA-Z][a-zA-Z0-9]{4,12}\S$/i, 'Username không có ký tự đặc biệt, khoảng trắng'),
    password: yup
      .string()
      .required('Password không được để trống!')
      .trim()
      .min(6, 'Password không được ngắn hơn 6 ký tự')
      .max(12, 'Password không được dài hơn 12 ký tự'),
  });
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = form.formState;
  const handleSubmit = async (values) => {
    try {
      const action = await dispatch(fetchLoginAuth(values));
      const result = unwrapResult(action);
      if (result) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          onClose: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Đăng nhập thành công',
        });
        // dispatch(handleChangeAuthForm(null));
        dispatch(hideModal('auth'));
      }
    } catch (error) {
      setMessage(error.data);
    }
  };
  const { clearErrors } = form;

  const onHandleChangeAuthForm = () => {
    handleChangeAuthForm('register');
    clearErrors();
  };
  return (
    <form className="auth__box-login" onSubmit={form.handleSubmit(handleSubmit)}>
      {isSubmitting && <LoadingLinear />}

      <div className="auth__header">
        <h3 className="auth__heading">Đăng nhập</h3>
        <button
          disabled={isSubmitting}
          type="button"
          className="btn btn--auth btn--register"
          onClick={onHandleChangeAuthForm}
        >
          Đăng ký
        </button>
      </div>
      <div className="auth__form auth__from--login">
        <InputControl
          message={message}
          form={form}
          placeholder="Tên tài khoản..."
          type="text"
          name="username"
          disabled={isSubmitting}
        />
        <InputControl
          message={message}
          form={form}
          placeholder="Mật khẩu..."
          type="password"
          name="password"
          disabled={isSubmitting}
        />
      </div>
      <div className="auth__support">
        <span className="auth__forgot-pass cl-danger">Quên mật khẩu?</span>
        <span className="auth__help">Trợ giúp</span>
      </div>
      <div className="auth__btn">
        <button
          disabled={isSubmitting}
          type="submit"
          className={`btn btn--green btn--submit btn--full-wd ${isSubmitting && 'btn--disabled'}`}
        >
          Đăng nhập
        </button>
      </div>
      <span className="icon-close" onClick={handleCloseAuthForm}>
        <i className="fas fa-times"></i>
      </span>
    </form>
  );
};
Login.propTypes = {
  handleChangeAuthForm: PropTypes.func,
  handleCloseAuthForm: PropTypes.func,
};
export default Login;
