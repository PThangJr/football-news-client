import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';
const Pagination = ({ pageItem, page, currentPage }) => {
  // console.log(currentPage, pageItem, page);
  let listPage = [];
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(pageItem);
  for (let i = 1; i <= page; i++) {
    listPage.push(i);
  }
  // console.log(startPage, endPage, currentPage);
  useEffect(() => {
    if (page) {
      if (currentPage >= 5 && currentPage > page - 4) {
        // console.log('TH1');
        setStartPage(page - 5);
        setEndPage(page);
      } else if ((currentPage > 2 || (currentPage > 2 && currentPage === page - 5)) && page > 5) {
        // console.log('TH2');
        setStartPage(currentPage - 3);
        setEndPage(currentPage + 2);
      } else if (currentPage <= 2 || page <= 5) {
        // console.log('TH3');
        setStartPage(0);
        setEndPage(5);
      }
    }
  }, [currentPage, startPage, endPage, page, pageItem]);
  listPage = listPage.slice(startPage, endPage);

  return (
    <div className="pagination">
      <ul className="pagination-list">
        <Link
          to={`?_page=${currentPage === 1 ? 1 : currentPage - 1}`}
          className={currentPage === 1 ? 'previous-page page-active' : 'previous-page'}
        >
          <i className="fas fa-chevron-left"></i>
        </Link>
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
        <Link
          to={`?_page=${currentPage === page ? page : currentPage + 1}`}
          className={currentPage === page ? 'next-page page-active' : 'next-page'}
        >
          <i className="fas fa-chevron-right"></i>
        </Link>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
};

export default Pagination;
