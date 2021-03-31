import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ data }) => {
  const { name, slug } = data;
  return (
    <li className="sidebar__item">
      <NavLink to={`/news/${slug}`} activeClassName="sidebar__link--active" className="sidebar__link">
        {name}
      </NavLink>
    </li>
  );
};

SidebarItem.propTypes = {
  data: PropTypes.object,
};

export default SidebarItem;
