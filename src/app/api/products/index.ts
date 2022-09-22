import axiosClient from '../axiosClient';
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  images: [];
}
interface DataProduct<T> {
  data: T[];
}
export interface ProductResponse {
  status: string;
  results: number;
  data: DataProduct<Product>;
}
export const products = {
  getAllProducts: async (): Promise<ProductResponse> => {
    const url = 'products';
    const response = await axiosClient.get(url);
    return response.data;
  },
};
