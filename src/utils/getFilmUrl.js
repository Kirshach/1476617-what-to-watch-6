import {AppRoutes} from '../const.js';

export const getFilmUrl = (id) => [AppRoutes.FILM_BASE_URL, id].join(`/`);
