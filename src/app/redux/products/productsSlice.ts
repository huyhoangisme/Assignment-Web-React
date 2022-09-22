import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  images?: [];
}
interface ProductsState {
  loading: boolean;
  getAllProducts: Product[] | null;
  getProductByID: Product | null;
  smartPhones: Product[] | null;
}
const initialState: ProductsState = {
  loading: false,
  getAllProducts: null,
  getProductByID: null,
  smartPhones: null,
};
const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    getAllProductsStart: state => {
      state.loading = true;
    },
    getAllProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.getAllProducts = action.payload;
      state.loading = false;
    },
    getAllProductsFailed: state => {
      state.loading = false;
    },
    getProductById: (state, action: PayloadAction<string>) => {
      const product = state.getAllProducts?.find(product => product._id === action.payload);
      if (product) state.getProductByID = product;
      else state.getProductByID = null;
    },
  },
});

export const productsActions = productsSlice.actions;

export const loadingSelector = (state: RootState) => state.products.loading;
export const allProductsSelector = (state: RootState) => state.products.getAllProducts;
export const getProductByIdSelector = (state: RootState) => state.products.getProductByID;
const productsReducer = productsSlice.reducer;
export default productsReducer;
