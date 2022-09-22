import { all } from 'redux-saga/effects';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import usersSaga from './users/userSaga';
import productsSaga from './products/productsSaga';
import cartsSaga from './shoppingcarts/shoppingCartSaga';

export default function* rootSaga() {
  yield all([usersSaga(), productsSaga(), cartsSaga()]);
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
