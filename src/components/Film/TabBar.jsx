import React from 'react';
import PropTypes from 'prop-types';

import {Link, useParams} from 'react-router-dom';

const getItemClassName = (isCurrentRoute) => `movie-nav__item ${isCurrentRoute ? `movie-nav__item--active` : ``}`;

const TabBar = ({tabs}) => {
  const {id, tab = ``} = useParams();
  const filmRoute = `/films/${id}`;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map(({label, route}, index) => (
          <li className={getItemClassName(route === tab)} key={index}>
            <Link className="movie-nav__link" to={`${filmRoute}/${route}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    route: PropTypes.string,
  })).isRequired
};

export default TabBar;
