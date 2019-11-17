import { combineReducers } from 'redux';
import { home } from 'pages/Home/redux';

const appReducer = combineReducers({
  home
});

export default appReducer;
