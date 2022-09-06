import { Thumb1 } from 'app/assets';

export interface Product {
  image: string;
  name: string;
}
export type Cart = {
  id: number;
  product: Product;
  price: number;
  quanity: number;
  total: number;
};
const singleCart: Cart = {
  id: 1,
  product: {
    image: Thumb1,
    name: 'Điện thoại đẹp',
  },
  price: 10000,
  quanity: 3,
  total: 499999,
};
const data: Cart[] = [];
for (let i = 0; i < 3; i++) {
  const item = Object.assign({}, singleCart);
  data.push(item);
}
export { data };
