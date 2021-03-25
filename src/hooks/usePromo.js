import {useSelector, useDispatch} from 'react-redux';

import {promoSelector} from '../store/domain/selectors';
import {fetchPromoThunk} from '../store/domain/thunks';
import {promoHasLoadedSelector} from '../store/app/state/selectors';

export const usePromo = () => {
  const dispatch = useDispatch();
  const promo = useSelector(promoSelector);
  const promoHasLoaded = useSelector(promoHasLoadedSelector);

  if (!promo.id) {
    dispatch(fetchPromoThunk());
  }

  return {promo, promoHasLoaded};
};
