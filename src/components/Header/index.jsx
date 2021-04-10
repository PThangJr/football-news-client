import React from 'react';
import Account from './components/Account';
import './style.scss';
const Header = () => {
  return (
    <header id="header" className="header">
      <nav className="navbar">
        <div className="navbar__menu">
          <span className="navbar__menu-icon">
            <i className="fas fa-bars" />
          </span>
          <span className="navbar__menu-icon">
            <i className="icon-views fas fa-search" />
          </span>
        </div>
        <div className="navbar__left">
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img
                className="header__logo-img"
                src="https://image.thanhnien.vn/uploaded/games/fifa_jypj.png"
                alt="Football News"
              />
            </a>
          </div>
          <div className="search">
            {/* <span className="icon--search">
              <i className="icon-views fas fa-search" />
            </span> */}
            <form className="form-search">
              <input type="text" className="form-search__input" name="search" placeholder="Tìm kiếm....." />
              {/* <p className="icon--delete">
                <i className="icon-views fas fa-times" />
              </p> */}
              <input type="submit" value="Search" className="btn--green" />
            </form>
          </div>
        </div>

        <div className="navbar__right ">
          <Account />
          <div className="dark-mode">
            <span className="dark-mode__box ">
              <i className="far fa-lightbulb icon-dark-mode" />
            </span>
            <span className="dark-mode__name">Dark Mode</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
