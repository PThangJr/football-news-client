import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import * as yup from 'yup';
import InputControl from '../../../components/Form/form-controls/InputControl';
import LoadingLinear from '../../../components/Loading/LoadingLinear';
import { hideModal } from '../../../pages/HomePage/modalSlice';
import { fetchChangePassword } from '../updateAuthSlice';
import './style.scss';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({});
  const Schema = yup.object().shape({
    oldPassword: yup
      .string()
      .required('Vui lòng nhập mật khẩu cũ')
      .trim()
      .min(6, 'Mật khẩu không được ngắn hơn 6 ký tự')
      .max(12, 'Mật khẩu không được dài hơn 12 ký tự'),
    newPassword: yup
      .string()
      .required('Vui lòng nhập mật khẩu mới')
      .trim()
      .min(6, 'Mật khẩu mới không được ngắn hơn 6 ký tự')
      .max(12, 'Mật khẩu mới không được dài hơn 12 ký tự'),
    newRePassword: yup
      .string()
      .required('Vui lòng nhập lại mật khẩu mới')
      .trim()
      .oneOf([yup.ref('newPassword')], 'Mật khẩu nhập lại không trùng khớp!'),
  });
  const form = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
    resolver: yupResolver(Schema),
  });
  const handleCloseForm = (e) => {
    e.preventDefault();
    dispatch(hideModal('changePassword'));
  };

  const handleSubmit = async (values) => {
    try {
      const action = await dispatch(fetchChangePassword(values));
      const result = unwrapResult(action);

      console.log(result);
      if (result) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thay đổi mật khẩu thành công!',
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(hideModal('changePassword'));
      } else {
      }
    } catch (error) {
      setMessage(error.data.error.message);
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <>
      {/* <Modal isOpen={true}>
      <ModalOverlay></ModalOverlay>

    </Modal> */}

      {isSubmitting && <LoadingLinear />}
      <form onSubmit={form.handleSubmit(handleSubmit)} className="update">
        <div className="update-passord">
          <h3 className="update__heading">Cập nhật thông tin</h3>
          <InputControl
            message={message}
            form={form}
            name="oldPassword"
            type="password"
            placeholder="Mật khẩu cũ"
            disabled={isSubmitting}
          />
          <InputControl
            form={form}
            name="newPassword"
            type="password"
            placeholder="Mật khẩu mới"
            disabled={isSubmitting}
          />
          <InputControl
            form={form}
            name="newRePassword"
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            disabled={isSubmitting}
          />
        </div>
        {/* <div className="update-others">
        <h3 className="update__heading">Cập nhật khác</h3>

        <InputControl form={form} cName="age" name="age" type="text" placeholder="Tuổi" />
        <SelectField cName="gender">
          <option value="" className="select-option">
            ---- Giới tính ----
          </option>
          <option value="male" className="select-option">
            1. Nam
          </option>
          <option value="female" className="select-option">
            2. Nữ
          </option>
          <option value="others" className="select-option">
            3. Khác
          </option>
        </SelectField>
      </div> */}
        <div className="update-buttons">
          <button
            type="submit"
            disabled={isSubmitting}
            className={'btn btn--green ' + (isSubmitting ? 'btn--disabled' : '')}
          >
            Cập nhật
          </button>
          <button
            type="default"
            disabled={isSubmitting}
            onClick={handleCloseForm}
            className={'btn btn--danger ' + (isSubmitting ? 'btn--disabled' : '')}
          >
            Quay lại
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
