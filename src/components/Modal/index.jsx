import React from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../pages/HomePage/modalSlice';
import './style.scss';
const Modal = (props) => {
  const { children, position = 'center', closeForm, zIndex, type, close } = props;
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    if (close) {
      close();
    } else {
      dispatch(hideModal(closeForm));
    }
  };
  return (
    <>
      <div className="modal" style={{ zIndex }}>
        <div className="overlay" onClick={handleCloseModal}></div>
        <div className={`modal--${position} modal--${type}`}>{children}</div>
      </div>
    </>
  );
};

Modal.propTypes = {};

export default Modal;
