import React from 'react';
import {Link, useParams} from 'react-router-dom';

import {getTabClassName} from './_helpers';
import {Tabs} from './_const';

const TabBar = () => {
  const {id, tab = ``} = useParams();
  const filmRoute = `/films/${id}`;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Tabs.map(({label, route}, index) => (
          <li className={getTabClassName(route === tab)} key={index}>
            <Link className="movie-nav__link" to={`${filmRoute}/${route}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

TabBar.propTypes = {};

export default TabBar;
