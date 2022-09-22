import { PayloadAction } from '@reduxjs/toolkit';
import { Params, users } from 'app/api/users';
import { call, put, takeEvery, takeLeading } from 'redux-saga/effects';
import { userActions } from './userSlice';

function* handleGetAllUser(action: PayloadAction<Params>) {
  try {
    const res = yield call(users.getAllUsers, action.payload);
    if (res.status === 'success') {
      yield put(userActions.getAllUserSuccess(res.data.data));
      yield put(userActions.getTotalUsers(res.total));
    } else yield put(userActions.getAllUserFailed);
  } catch (e) {
    yield put(userActions.getAllUserFailed);
    throw e;
  }
}
function* handleDeleteUser(action: PayloadAction<string>) {
  try {
    yield call(users.deleteUser, action.payload);
    yield put(userActions.deleteUserSuccess(action.payload));
  } catch (e) {
    throw e;
  }
}
function* handleUsers() {
  yield takeLeading(userActions.getAllUserStart.type, handleGetAllUser);
  yield takeEvery(userActions.deleteUserStart.type, handleDeleteUser);
}
export default function* usersSaga() {
  yield call(handleUsers);
}
