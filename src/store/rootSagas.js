import { all } from 'redux-saga/effects';

/** login */
import LoginSaga from 'users/sagas/LoginSaga';

// get user list
import getUserListSaga from 'home/sagas/GetUserListSaga';

export default function* RootSagas() {
  yield all([
    // users sagas
    LoginSaga(),

    //home
    getUserListSaga()
  ]);
}
