import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import productsReducer from './products/productsSlice';
import root from './root';
import shoppingCartReducer from './shoppingcarts/shoppingCartSlice';
import userReducer from './users/userSlice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  users: userReducer,
  products: productsReducer,
  carts: shoppingCartReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
    }).concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(root);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
