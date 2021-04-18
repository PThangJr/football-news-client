import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import LoadingDotCircle from '../Loading/LoadingDotCircle';
import Account from './components/Account';
import queryString from 'query-string';
import './style.scss';
const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const inputSearch = useRef(null);
  const { loading } = useSelector((state) => state.dataNews);
  const queryObj = queryString.parse(location.search) || {};
  const isSearch = Object.hasOwnProperty.bind(queryObj)('search');
  // console.log(isSearch);
  useEffect(() => {
    const value = inputSearch.current.value.toLowerCase();

    if (!location.search) {
      inputSearch.current.value = '';
    }
    if (!value && !location.search) {
      history.push({
        pathname: history.location.pathname,
      });
    }
  }, [location.search, history]);
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    let value = inputSearch.current.value.toLowerCase();
    if (value) {
      history.push({
        pathname: '/',
        search: `?search=${value}`,
      });
    } else {
      history.push({
        pathname: history.location.pathname,
      });
    }
  };
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
              <input
                disabled={loading}
                ref={inputSearch}
                type="text"
                className="form-search__input"
                name="search"
                placeholder="Tìm kiếm....."
              />
              {/* <p className="icon--delete">
                <i className="icon-views fas fa-times" />
              </p> */}
              <button
                type="submit"
                onClick={handleSubmitSearch}
                className={'btn btn--green ' + (loading ? (isSearch ? ' btn--disabled' : '') : '')}
              >
                {loading && isSearch && <LoadingDotCircle />}
                <span className={`${loading && isSearch && 'hide-on-mobile'}`}>Search</span>
              </button>
            </form>
          </div>
        </div>

        <div className="navbar__right ">
          <Account />
          <div className="dark-mode">
            <span className="dark-mode__box ">
              <i className="far fa-lightbulb icon-dark-mode" />
            </span>
            <span className="dark-mode__name">Dark</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
