import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../pages/HomePage/modalSlice';
const Modal = (props) => {
  const { children, position = 'center', closeForm, zIndex, type } = props;
  const dispatch = useDispatch();
  const onHandleCloseModal = () => {
    if (closeForm) {
      dispatch(hideModal(closeForm));
    }
  };
  return (
    <div className="modal" style={{ zIndex }}>
      <div className="overlay" onClick={onHandleCloseModal}></div>
      <div className={`modal--${position} modal--${type}`}>{children}</div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
