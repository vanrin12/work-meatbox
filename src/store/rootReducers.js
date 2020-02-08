import { combineReducers } from 'redux';
import { homeReducer } from 'home/redux';
import { accountReducer } from 'users/redux';

const appReducer = combineReducers({
  homeReducer,
  accountReducer
});

export default appReducer;
