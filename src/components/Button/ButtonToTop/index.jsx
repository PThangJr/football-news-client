import React from 'react';
import './style.scss';
const ButtonToTop = () => {
  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <span className="btn btn--to-top" onClick={handleMoveToTop}>
      <i className="fas fa-caret-up"></i>
    </span>
  );
};

export default ButtonToTop;
