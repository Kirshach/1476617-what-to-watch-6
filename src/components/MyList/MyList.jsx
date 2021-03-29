import React from 'react';

import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

import {useFavouriteFilms} from '../../hooks';

import {getFavouriteMoviesListComponent} from './_helpers';

const MyList = () => {
  const [favouriteFilms, favouriteFilmsHaveLoaded] = useFavouriteFilms();

  return (
    <div className="user-page">
      <PageHeader className="user-page__head">
        <h1 className="page-title user-page__title">
          My list
        </h1>
      </PageHeader>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {getFavouriteMoviesListComponent(favouriteFilms, favouriteFilmsHaveLoaded)}
        </div>

      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = {};

export default MyList;
