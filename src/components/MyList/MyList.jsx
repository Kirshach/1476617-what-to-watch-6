import React from 'react';

import MovieCardList from '../MovieCardList/MovieCardList';

import {withFilms, withFilmsPropTypes} from '../../hocs/withFilms';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

const MyList = ({films, filmsHaveLoaded}) => {
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
          {filmsHaveLoaded ? <MovieCardList films={films}/> : <LoadingPlaceholder/> }
        </div>

      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = withFilmsPropTypes;

const MyListWithFilms = withFilms(MyList);

export default MyListWithFilms;
