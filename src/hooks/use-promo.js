import {promoHasLoadedSelector} from '../store/app/state/selectors';
import {promoSelector} from '../store/domain/selectors';
import {fetchPromoThunk} from '../store/domain/thunks';
import {getUseServerDataHook} from './_helpers';

const shouldFetchPromo = (promo) => !promo.id;

export const usePromo = getUseServerDataHook(
    promoSelector,
    promoHasLoadedSelector,
    shouldFetchPromo,
    fetchPromoThunk
);
