import axios from 'axios';

import {APIRoutes} from '../const';
import {adaptFromApi} from '../utils/adaptFromApi';

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

export const throwAPIRequestError = (response, route) => {
  throw new Error(`Server responded with status ${response.status} "${response.data.error}" on ${route} route fetch`);
};
export const getFilmAPIRoute = (id, subroute) => [APIRoutes.FILMS, id, subroute].join(`/`);
export const getCommentsAPIRoute = (id) => [APIRoutes.COMMENTS, id].join(`/`);
export const api = createAPI();
