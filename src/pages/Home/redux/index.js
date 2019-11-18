// import libs
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Define action creators
export const { Types, Creators } = createActions({
  testRedux: null
});

// Initial state
export const INITIAL_STATE = Immutable({
  name: ''
});

const testRedux = state => {
  console.log('state', state);

  return state.merge({
    name: 'success'
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.TEST_REDUX]: testRedux
};

// Create reducers by pass state and handlers
export const homeReducer = createReducer(INITIAL_STATE, HANDLERS);
