import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, activeOnlyWhenExact, children, cName, cNameLink, caretDown }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={(match ? 'active ' : '') + (caretDown ? 'caret-down' : '')} style={{ width: '100%' }}>
      <Link to={to} className={cNameLink}>
        {children}
      </Link>
      {/* {caretDown && <i className="fas fa-caret-down"></i>} */}
    </div>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string,
  activeOnlyWhenExact: PropTypes.bool,
  cName: PropTypes.string,
  cNameLink: PropTypes.string,
  caretDown: PropTypes.bool,
};

export default CustomLink;
