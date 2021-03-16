import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__heading">
        Menu
        <span className="icon-close">
          <i className="fas fa-times" />
        </span>
      </h2>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to="/" exact activeClassName="sidebar__link--active" className="sidebar__link ">
            News / Trang chủ
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/news/premier-league" activeClassName="sidebar__link--active" className="sidebar__link">
            Premier League
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/news/la-liga" activeClassName="sidebar__link--active" className="sidebar__link">
            La Liga
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/news/serie-a" activeClassName="sidebar__link--active" className="sidebar__link">
            Serie A
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/news/bundesliga" activeClassName="sidebar__link--active" className="sidebar__link">
            Bundesliga
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/news/ligue-1" activeClassName="sidebar__link--active" className="sidebar__link">
            Ligue 1
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/news/UEFA-champion-league" activeClassName="sidebar__link--active" className="sidebar__link ">
            UEFA Champion League
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/news/UEFA-europa-league" activeClassName="sidebar__link--active" className="sidebar__link">
            UEFA Europa League
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
