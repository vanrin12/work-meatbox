// import libs
import { create } from 'apisauce';
// import App's config
import AppConfig from 'config/appConfig';

export const ROUTES = {
  // Auths
  LOGIN: `/login`,
  GET_USERS: `/users`
};

export const API = create({
  baseURL: AppConfig.API_URL
});
