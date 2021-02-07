import React from 'react';

const PageNotFound = () => {
  return <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
    </header>

    <main className="page-not-found">
      <h2 className="page-not-found__heading">404</h2>
      <p className="page-not-found__message">Sorry, the page you&apos;re looking for could not be found</p>
      <footer className="page-not-found__footer">It could be you, it could be us...</footer>
    </main>

    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

export default PageNotFound;
