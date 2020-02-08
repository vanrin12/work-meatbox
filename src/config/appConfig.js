let apiUrl = '';

switch (process.env.REACT_APP_ENVIRONMENT) {
  case 'dev':
    apiUrl = process.env.REACT_APP_API_URL;
    break;
  // TODO Update variable enviroment for staging environment
  case 'stag':
    apiUrl = process.env.REACT_APP_API_URL;
    break;
  // TODO Update variable enviroment for production environment
  case 'prod':
    apiUrl = process.env.REACT_APP_API_URL;
    break;

  default:
}

export default {
  API_URL: apiUrl,
  DEFAULT_PER_PAGE: 10
};
