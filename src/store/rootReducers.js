import { combineReducers } from 'redux';
import { homeReducer } from 'pages/Home/redux';

const appReducer = combineReducers({
  homeReducer
});

export default appReducer;
