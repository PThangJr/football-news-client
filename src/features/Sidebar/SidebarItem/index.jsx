import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CustomLink from '../../../components/CustomLink';
import './style.scss';
const SidebarItem = ({ data }) => {
  const { name, slug, logo } = data;
  if (logo) {
    var { secure_url } = logo;
  }
  // console.log(name);
  return (
    <li className="sidebar__item">
      <CustomLink to={`/${slug}`} cNameLink="sidebar__link">
        <img src={`${secure_url}`} alt="" className="sidebar__logo" />
        {name}
      </CustomLink>
    </li>
  );
  // return (
  //   <li className="sidebar__item">
  //     <NavLink to={`/news/${slug}`} activeClassName="sidebar__link--active" className="sidebar__link">
  //       <img src={`${secure_url}`} alt="" className="sidebar__logo" />
  //       {name}
  //     </NavLink>
  //     {/* <i className="fas fa-caret-down"></i> */}
  //   </li>
  // );
};

{
  /* <CustomLink to={`/news/${slug}`} cName="sidebar__item" cNameLink="sidebar__link">
        <img src={`${secure_url}`} alt="" className="sidebar__logo" />
        {name}
      </CustomLink> */
}
SidebarItem.propTypes = {
  data: PropTypes.object,
};

export default SidebarItem;
