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

const getFilmAPIRoute = (id, subroute) => [APIRoutes.FILMS, id, subroute].join(`/`);
const getCommentsAPIRoute = (id) => [APIRoutes.COMMENTS, id].join(`/`);

const api = createAPI();

export {api, getFilmAPIRoute, getCommentsAPIRoute};
