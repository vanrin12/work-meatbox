import { combineReducers } from 'redux';
import { homeReducer } from 'home/redux';
import { accountReducer } from 'users/redux';
import { calendarReducer } from 'calendar/redux';

const appReducer = combineReducers({
  homeReducer,
  accountReducer,
  calendarReducer
});

export default appReducer;
