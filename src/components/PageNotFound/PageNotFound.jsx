import React from 'react';

import PageFooter from '../PageFooter/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

const PageNotFound = () => {
  return (
    <div className="user-page">
      <PageHeader className="user-page__head" noUserBlock/>

      <main className="info-screen">
        <h2 className="info-screen__heading">404</h2>
        <p className="info-screen__message">Sorry, the page you&apos;re looking for could not be found</p>
        <footer className="info-screen__footer">It could be you, it could be us...</footer>
      </main>

      <PageFooter />
    </div>
  );
};

PageNotFound.propTypes = {};

export default PageNotFound;
