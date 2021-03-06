import React from 'react';
import {useDispatch} from 'react-redux';

import {setIsOnlineAction} from '../../store/app/state/actions';

import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';

const OfflineScreen = () => {
  const dispatch = useDispatch();

  const handleConnectMeButtonClick = () => {
    if (window.navigator.onLine) {
      dispatch(setIsOnlineAction(true));
    }
  };

  return (
    <div className="user-page">
      <PageHeader className="user-page__head" noUserBlock/>

      <main className="info-screen">
        <h2 className="info-screen__heading">Oops...</h2>
        <p className="info-screen__message">It looks like you&apos;re offline 👀</p>
        <p className="info-screen__message">Press here if you think you&apos;ve restored connection:</p>
        <button className="btn info-screen__btn" type="button" onClick={handleConnectMeButtonClick}>
          <span>Connect me!</span>
        </button>
      </main>

      <PageFooter />
    </div>
  );
};

OfflineScreen.propTypes = {};

export default OfflineScreen;
