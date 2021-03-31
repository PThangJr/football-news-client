import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SkeletonElement from '../../components/Loading/Skeleton/SkeletonElement';
import SidebarItem from './SidebarItem';
import './style.scss';
import { fetchTournament } from './tournamentSlice';
const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const dispatchTournament = async () => {
      await dispatch(fetchTournament());
    };
    dispatchTournament();
  }, [dispatch]);
  const { data, loading } = useSelector((state) => state.dataTournaments);

  const renderTournaments = () => {
    if (loading) {
      const arr = [];
      for (let i = 0; i < 8; i++) {
        arr.push(i);
      }
      return arr.map((item) => {
        return (
          <SkeletonElement key={item} cName="tournament" style={{ width: '100%', height: '45px', margin: '5px 0px' }} />
        );
      });
    } else {
      if (data.length > 0) {
        return data.map((item) => {
          return <SidebarItem data={item} key={item._id} />;
        });
      }
    }
  };
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
        {renderTournaments()}
      </ul>
    </aside>
  );
};

export default Sidebar;
