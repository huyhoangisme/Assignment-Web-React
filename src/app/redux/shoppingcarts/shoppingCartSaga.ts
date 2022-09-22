import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'app/api/products';
import { call, put, takeEvery } from 'redux-saga/effects';
import { shoppingCartActions } from './shoppingCartSlice';

function* addToCart(action: PayloadAction<Product>) {
  try {
    yield put(shoppingCartActions.addToCartSuccess(action.payload));
  } catch (error) {
    yield put(shoppingCartActions.addToCartFailed);
    throw error;
  }
}
function* removeFromCart(actions: PayloadAction<string>) {
  try {
    yield call(shoppingCartActions.removeFromCart, actions.payload);
  } catch (error) {
    throw error;
  }
}
function* handleCarts() {
  yield takeEvery(shoppingCartActions.addToCartStart.type, addToCart);
  yield takeEvery(shoppingCartActions.removeFromCart.type, removeFromCart);
}
export default function* cartsSaga() {
  yield call(handleCarts);
}
