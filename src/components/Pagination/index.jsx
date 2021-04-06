import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';
const Pagination = ({ currentPage, totalPage, pageRangeDisplay }) => {
  // console.log(currentPage, pageRangeDisplay, totalPage);
  currentPage = (Number.isInteger(currentPage) && currentPage) || 1;
  let listPage = [];
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(pageRangeDisplay);
  for (let i = 1; i <= totalPage; i++) {
    listPage.push(i);
  }
  // console.log(startPage, endPage, currentPage);
  useEffect(() => {
    if (totalPage) {
      if (currentPage >= pageRangeDisplay && currentPage > totalPage - pageRangeDisplay + 1) {
        // console.log('TH1');
        setStartPage(totalPage - pageRangeDisplay);
        setEndPage(totalPage);
      } else if (
        (currentPage > 2 || (currentPage > 2 && currentPage === totalPage - pageRangeDisplay)) &&
        totalPage > pageRangeDisplay
      ) {
        // console.log('TH2');
        setStartPage(currentPage - 2); // - 3
        setEndPage(currentPage + pageRangeDisplay - 2); // + 2
      } else if (currentPage <= 2 || totalPage <= pageRangeDisplay) {
        // console.log('TH3');
        setStartPage(0);
        setEndPage(pageRangeDisplay);
      }
    }
  }, [currentPage, startPage, endPage, totalPage, pageRangeDisplay]);
  listPage = listPage.slice(startPage, endPage);
  // console.log(startPage, endPage);
  return (
    <div className="pagination">
      {listPage.length > 0 && (
        <ul className="pagination-list">
          <Link
            to={`?page=${currentPage === 1 ? 1 : currentPage - 1}`}
            className={currentPage === 1 ? 'previous-page page-active' : 'previous-page'}
          >
            <i className="fas fa-chevron-left"></i>
          </Link>
          {listPage.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`?page=${item}`}
                className={currentPage === item ? 'pagination-item pagination-item--active' : 'pagination-item'}
              >
                {item}
              </NavLink>
            );
          })}
          <Link
            to={`?page=${currentPage === totalPage ? totalPage : currentPage + 1}`}
            className={currentPage === totalPage ? 'next-page page-active' : 'next-page'}
          >
            <i className="fas fa-chevron-right"></i>
          </Link>
        </ul>
      )}
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
};

export default Pagination;
