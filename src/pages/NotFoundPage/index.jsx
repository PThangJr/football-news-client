import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
const NotFoundPage = ({ message }) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
    footer: '<a href="/">Quay lại trang chủ</a>',
  });
  return (
    <div className="not-found">
      <div className="not-found-box">
        <h3 className="not-found__heading">{message || 'Trang web không tồn tại'}</h3>
        <p className="not-found__status">404 - Not Found</p>
        <Link to="/" className="btn btn--primary btn--green">
          <i className="fas fa-house-user"></i>
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

NotFoundPage.propTypes = {
  message: PropTypes.string,
};
export default NotFoundPage;
