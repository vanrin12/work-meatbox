import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'utils/Apis';

import { Types } from '../redux';

// worker Saga: will be fired on signIn actions
function* login(action) {
  try {
    /**
     * Example data
     * url: enpoint/login
     * params:
     *  {
     *    username: 'Lorem'
     *    password: 'Lorem',
     *  }
     *
     */
    const response = yield call(() =>
      API.post(ROUTES.LOGIN, JSON.stringify(action.loginInfo))
    );
    if (response.ok) {
      const { token } = response.data;
      // In case: Login request success
      yield put({ type: Types.SIGN_IN_SUCCESS, token });
    } else {
      // In case: Login request failed
      yield put({
        type: Types.SIGN_IN_FAILED
        // errors: response.data.text && response.data.text
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: Types.SIGN_IN_FAILED, error });
  }
}

/*
  Starts login on each dispatched signIn action.
*/
function* loginSaga() {
  yield takeLatest(Types.SIGN_IN, login);
}

export default loginSaga;
