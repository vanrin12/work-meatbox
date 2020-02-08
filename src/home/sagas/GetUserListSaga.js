import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'utils/Apis';

import { Types } from '../redux';

// worker Saga: will be fired on get user list actions
function* getUsers(action) {
  try {
    /**
     * Example data
     * url: enpoint/users
     *
     */
    const response = yield call(() => API.get(ROUTES.GET_USERS));
    if (response.ok) {
      const { data } = response;
      // In case: get users request success
      yield put({ type: Types.GET_USER_LIST_SUCCESS, data });
    } else {
      // In case: get users request failed
      yield put({
        type: Types.GET_USER_LIST_FAILED
        // errors: response.data.text && response.data.text
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: Types.GET_USER_LIST_FAILED, error });
  }
}

/*
  Starts login on each dispatched signIn action.
*/
function* getUserListSaga() {
  yield takeLatest(Types.GET_USER_LIST, getUsers);
}

export default getUserListSaga;
