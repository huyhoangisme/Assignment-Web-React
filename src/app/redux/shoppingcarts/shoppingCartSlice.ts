import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'app/api/products';
import { RootState } from '../store';
interface CartProduct extends Product {
  quanity: number;
}
interface CartState {
  loading: boolean;
  cartItems: CartProduct[] | null;
}
const initialState: CartState = {
  loading: false,
  cartItems: null,
};
const shoppingCartSlice = createSlice({
  name: 'carts',
  initialState: initialState,
  reducers: {
    getCartItems: (state): CartState => {
      return { ...state };
    },
    addToCartStart: (state, actions: PayloadAction<Product>) => {
      state.loading = true;
    },
    addToCartSuccess: (state, actions: PayloadAction<Product>) => {
      const cartItem = actions.payload as CartProduct;
      if (!state.cartItems) state.cartItems = [cartItem];
      else {
        const item = state.cartItems.find(product => product._id === cartItem._id);
        if (!item) state.cartItems = [...state.cartItems, cartItem];
        else {
          state.cartItems = state.cartItems.map(item =>
            item._id === cartItem._id ? { ...item, quanity: item.quanity + cartItem.quanity } : item,
          );
        }
      }
    },
    addToCartFailed: (state, actions: PayloadAction<Product>) => {
      state.loading = false;
    },
    removeFromCart: (state, actions: PayloadAction<string>) => {
      state.loading = true;
      if (!state.cartItems) {
        state.loading = false;
        return;
      } else {
        const isExist = state.cartItems.find(item => item._id === actions.payload);
        if (isExist) {
          state.cartItems = state.cartItems.filter(item => item._id !== actions.payload);
        }
        state.loading = false;
      }
    },

    ajustQuantity: (state, actions: PayloadAction) => {},
  },
});

export const shoppingCartActions = shoppingCartSlice.actions;

export const loadingSelector = (state: RootState) => state.carts.loading;
export const cartItemsSelector = (state: RootState) => state.carts.cartItems;

const shoppingCartReducer = shoppingCartSlice.reducer;
export default shoppingCartReducer;
