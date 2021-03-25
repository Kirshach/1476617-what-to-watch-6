import React from 'react';

import SiteLogo from '../SiteLogo/SiteLogo';

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <SiteLogo />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

PageFooter.propTypes = {};

export default React.memo(PageFooter);
