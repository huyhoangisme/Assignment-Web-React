import { PayloadAction } from '@reduxjs/toolkit';
import { ProductResponse, products } from 'app/api/products';
import { call, put, takeEvery } from 'redux-saga/effects';
import { productsActions } from './productsSlice';

function* handleGetAllProduct() {
  try {
    const response: ProductResponse = yield call(products.getAllProducts);
    if (response.status === 'success') yield put(productsActions.getAllProductsSuccess(response.data.data));
    else yield put(productsActions.getAllProductsFailed);
  } catch (e) {
    const error = e as Error;
    throw error;
  }
}
function* handleGetProductByID(action: PayloadAction<string>) {
  yield call(productsActions.getProductById, action.payload);
}
function* handleProductActions() {
  yield takeEvery(productsActions.getAllProductsStart.type, handleGetAllProduct);
  yield takeEvery(productsActions.getProductById.type, handleGetProductByID);
}

export default function* productsSaga() {
  yield call(handleProductActions);
}
