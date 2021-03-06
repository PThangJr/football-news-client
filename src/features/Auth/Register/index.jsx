import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import * as yup from 'yup';
import CheckboxControl from '../../../components/Form/form-controls/CheckboxControl';
import InputControl from '../../../components/Form/form-controls/InputControl';
import LoadingDotCircle from '../../../components/Loading/LoadingDotCircle';
import { fetchRegisterAuth } from '../authSlice';
import './style.scss';
const Register = ({ handleChangeAuthForm, handleCloseAuthForm }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({});
  const schema = yup.object().shape({
    username: yup
      .string()
      .trim()
      .required('Username không được để trống!')
      .min(3, 'Username ít nhất có 3 ký tự!')
      .max(12, 'Username không quá 12 ký tự')
      .matches(/^[a-zA-Z][a-zA-Z0-9]+\S$/i, 'Username không có ký tự đặc biệt, khoảng trắng'),

    email: yup.string().trim().required('Email không được để trống!'),
    password: yup
      .string()
      .trim()
      .required('Password không được để trống!')
      .min(6, 'Password ít nhất có 6 ký tự!')
      .max(12, 'Password không quá 12 ký tự'),
    rePassword: yup
      .string()
      .trim()
      .required('Re-Password không được để trống!')
      .oneOf([yup.ref('password')], 'RePassword không trùng khớp!'),
    rules: yup.boolean().required().oneOf([true], 'Error'),
  });
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      rePassword: '',
      rules: false,
    },
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = form.formState;
  // console.log(errors);
  const handleSubmit = async (values) => {
    try {
      // console.log(values);
      const { rePassword, rules, ...data } = values;
      const action = await dispatch(fetchRegisterAuth(data));
      unwrapResult(action);

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'Đăng ký tài khoản thành công',
      });
      dispatch(handleCloseAuthForm());
    } catch (error) {
      setMessage(error?.data?.error.message);
    }
  };
  const onHandleChangeAuthForm = () => {
    handleChangeAuthForm('login');
    form.clearErrors();
  };
  return (
    <form className="auth__box-register rotate-y-180" onSubmit={form.handleSubmit(handleSubmit)}>
      {/* {isSubmitting && <LoadingLinear />} */}

      <div className="auth__header">
        <h3 className="auth__heading">Đăng ký</h3>
        <button
          disabled={isSubmitting}
          type="button"
          className="btn btn--auth btn--login"
          onClick={onHandleChangeAuthForm}
        >
          Đăng nhập
        </button>
      </div>
      <div className="auth__form auth__form--register">
        <InputControl
          message={message}
          form={form}
          name="username"
          type="text"
          placeholder="Username..."
          disabled={isSubmitting}
        />
        <InputControl message={message} form={form} name="email" type="email" placeholder="Email..." />
        <InputControl
          message={message}
          form={form}
          name="password"
          type="password"
          placeholder="Passowrd..."
          disabled={isSubmitting}
        />
        <InputControl
          message={message}
          form={form}
          name="rePassword"
          type="password"
          placeholder="Re-Password..."
          disabled={isSubmitting}
        />
      </div>
      <div className="auth__rules">
        <div className="form-check">
          <CheckboxControl message={message} name="rules" form={form} />
          {/* <CheckBoxControl form={form} type="checkbox" name="isConfirmRule" cName="checkbox" /> */}
          <span className={`auth__rules-text ${form?.errors?.rules && 'auth__rules-text--error'}`}>
            Tôi đồng ý với
            <a className="auth__rules-link" href="https://football-news-rule.com">
              Điều khoản dịch vụ
            </a>
            {/* <a className="auth__rules-link" href="#">
              Chính sách dịch vụ
            </a> */}
            <span>(*)</span>
          </span>
        </div>
      </div>
      <div className="auth__btn">
        <button
          disabled={isSubmitting}
          type="submit"
          className={`btn btn--orange btn--submit btn--full-wd ${isSubmitting && 'btn--disabled'}`}
        >
          {isSubmitting && <LoadingDotCircle />}
          Đăng ký
        </button>
      </div>
      <span className="icon-close" onClick={handleCloseAuthForm}>
        <i className="fas fa-times"></i>
      </span>
    </form>
  );
};
Register.propTypes = {
  handleChangeAuthForm: PropTypes.func,
  handleCloseAuthForm: PropTypes.func,
};
export default Register;
