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

const testRedux = state =>
  state.merge({
    name: 'success'
  });

// Assign handler to types.
const HANDLERS = {
  [Types.test_REDUX]: testRedux
};

// Create reducers by pass state and handlers
export const home = createReducer(INITIAL_STATE, HANDLERS);
