// import libs
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Define action creators
export const { Types, Creators } = createActions({
  getUserList: null,
  getUserListSuccess: null,
  getUserListFailed: null
});

// Initial state
export const INITIAL_STATE = Immutable({
  isProcessing: false
});

const getUserList = (state, action) => {
  return state.merge({
    type: action.type,
    isProcessing: true
  });
};

const getUserListSuccess = (state, action) => {
  return state.merge({
    type: action.type,
    isProcessing: false,
    userList: action.data
  });
};

const getUserListFailed = (state, action) => {
  return state.merge({
    type: action.type,
    isProcessing: false
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.GET_USER_LIST]: getUserList,
  [Types.GET_USER_LIST_SUCCESS]: getUserListSuccess,
  [Types.GET_USER_LIST_FAILED]: getUserListFailed
};

// Create reducers by pass state and handlers
export const homeReducer = createReducer(INITIAL_STATE, HANDLERS);
