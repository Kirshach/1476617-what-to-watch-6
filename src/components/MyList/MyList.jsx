import React from 'react';
import PropTypes from 'prop-types';

import MovieCardList from '../MovieCardList/MovieCardList';

import {withFilms} from '../../hocs/withFilms';

import {filmArrayPropTypes} from '../../prop-types/film';

import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

const MyList = ({films, isLoadingFilms}) => {
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
          {isLoadingFilms ? <LoadingPlaceholder/> : <MovieCardList films={films} />}
        </div>

      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  films: filmArrayPropTypes,
  isLoadingFilms: PropTypes.bool.isRequired,
};

const MyListWithFilms = withFilms(MyList);

export default MyListWithFilms;
