import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { fetchLoginAuth } from '../../../../features/Auth/authoSlice';
import './style.scss';
const AccountSetting = ({ infoUser = {} }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Đăng xuất tài khoản?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đăng xuất',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Đăng xuất thành công', '', 'success');
        // dispatch(isLogout());
        dispatch(fetchLoginAuth.rejected());
      }
    });
  };
  return (
    <ul className="account__setting-list">
      <li className="account__setting-item">
        <span className="text-content">Thông tin tài khoản</span>
      </li>
      <li className="account__setting-item">
        <span className="text-content">Đổi mật khẩu</span>
      </li>
      <li className="account__setting-item" onClick={handleLogout}>
        <span className="text-content">
          Đăng xuất <i className="fas fa-sign-out-alt"></i>
        </span>
      </li>
    </ul>
  );
};
AccountSetting.propTypes = {
  infoUser: PropTypes.object,
};
export default AccountSetting;
