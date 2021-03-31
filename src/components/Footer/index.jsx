import React from 'react';
import './style.scss';
const Footer2 = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <h3 className="footer-content__heading">
          <span className="text">F</span>
          <span className="text">O</span>
          <span className="text">O</span>
          <span className="text">T</span>
          <span className="text">B</span>
          <span className="text">A</span>
          <span className="text">L</span>
          <span className="text">L</span>
          <span className="text">N</span>
          <span className="text">E</span>
          <span className="text">W</span>
          <span className="text">S</span>
        </h3>
        <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=100006001683557" className="social social--facebook">
            <i className="fab fa-facebook-square"></i>
          </a>

          <a href="https://www.instagram.com/" className="social social--instagram">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="https://github.com/PThangJr" className="social social--github">
            <i className="fab fa-git-square"></i>
          </a>
        </div>
        <div className="copy-right">
          Copyright © 2021 Goal (English) All rights reserved. The information contained in Goal (English) may not be
          published, broadcast, rewritten, or redistributed without the prior written authority of Goal (English)
        </div>
      </div>
    </div>
  );
};

export default Footer2;
