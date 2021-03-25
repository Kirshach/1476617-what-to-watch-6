import React from 'react';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import MovieCardList from '../MovieCardList/MovieCardList';
import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

const MyList = () => {
  // всё править!!
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

MyList.propTypes = {};

export default MyList;
