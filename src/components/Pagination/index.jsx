import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
const Pagination = ({ pageItem, page, currentPage }) => {
  let listPage = [];
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(pageItem);
  for (let i = 1; i <= page; i++) {
    listPage.push(i);
  }
  // console.log(startPage, endPage, currentPage);
  useEffect(() => {
    if (page) {
      if (currentPage > 5 && currentPage > page - 4) {
        // console.log('TH1');
        setStartPage(page - 5);
        setEndPage(page);
      } else if ((currentPage > 2 || currentPage === page - 5) && page > 5) {
        // console.log('TH2');
        setStartPage(currentPage - 3);
        setEndPage(currentPage + 2);
      } else if (currentPage <= 2 || page <= 5) {
        // console.log('TH3');
        setStartPage(0);
        setEndPage(5);
      }
    }
  }, [currentPage, startPage, endPage, page]);
  listPage = listPage.slice(startPage, endPage);

  return (
    <div className="pagination">
      <ul className="pagination-list">
        {listPage.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={`?_page=${item}`}
              className={currentPage === item ? 'pagination-item pagination-item--active' : 'pagination-item'}
            >
              {item}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
};

export default Pagination;
