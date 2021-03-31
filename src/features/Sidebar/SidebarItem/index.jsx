import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';
const SidebarItem = ({ data }) => {
  const { name, slug, logo } = data;
  if (logo) {
    var { secure_url } = logo;
  }
  return (
    <li className="sidebar__item">
      <NavLink to={`/news/${slug}`} activeClassName="sidebar__link--active" className="sidebar__link">
        <img src={`${secure_url}`} alt="" className="sidebar__logo" />
        {name}
      </NavLink>
    </li>
  );
};

SidebarItem.propTypes = {
  data: PropTypes.object,
};

export default SidebarItem;
