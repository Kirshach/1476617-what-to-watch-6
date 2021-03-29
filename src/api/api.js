import axios from 'axios';

import {adaptFromApi} from '../utils';
import {APIRoutes} from '../const';

const API_TIMEOUT = 5000;

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://6.react.pages.academy/wtw`,
    timeout: API_TIMEOUT,
    withCredentials: true,
    transformResponse: [
      ...axios.defaults.transformResponse,
      adaptFromApi
    ],
  });
  return api;
};

export const getFavouriteFilmStatusAPIRoute = (id, isFavourite) => {
  const status = isFavourite ? `0` : `1`;
  return [APIRoutes.FAVOURITE, id, status].join(`/`);
};
export const throwAPIRequestError = (response, route) => {
  if (response && response.status) {
    throw new Error(`Server responded with status ${response.status} "${response.data.error}" on ${route} route fetch`);
  }
};
export const getFilmAPIRoute = (id, subroute) => [APIRoutes.FILMS, id, subroute].join(`/`);
export const getCommentsAPIRoute = (id) => [APIRoutes.COMMENTS, id].join(`/`);
export const api = createAPI();

