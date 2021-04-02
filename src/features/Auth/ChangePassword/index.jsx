import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import InputControl from '../../../components/Form/form-controls/InputControl';
import SelectField from '../../../components/Form/form-fields/SelectFields';
import { hideModal } from '../../../pages/HomePage/modalSlice';
import './style.scss';
const ChangePassword = () => {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      age: null,
      gender: '',
    },
  });
  const handleCloseForm = () => {
    dispatch(hideModal('changePassword'));
  };
  return (
    <form className="change-password">
      <h3 className="change-password__heading">Cập nhật thông tin</h3>
      <InputControl form={form} name="oldPassword" type="password" placeholder="Mật khẩu cũ" />
      <InputControl form={form} name="newPassword" type="password" placeholder="Mật khẩu mới" />
      <InputControl form={form} name="newRePassword" type="password" placeholder="Nhập lại mật khẩu mới" />

      <InputControl form={form} cName="age" name="age" type="text" placeholder="Tuổi" />
      <SelectField>
        <option value="" className="select-option">
          -- Giới tính --
        </option>
        <option value="male" className="select-option">
          Nam
        </option>
        <option value="female" className="select-option">
          Nữ
        </option>
      </SelectField>
      <button type="submit" className="btn btn--green">
        Cập nhật
      </button>
      <button onClick={handleCloseForm} className="btn btn--danger">
        Quay lại
      </button>
    </form>
  );
};

export default ChangePassword;
