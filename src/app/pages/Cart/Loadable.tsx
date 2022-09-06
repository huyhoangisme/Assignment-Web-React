import { lazyLoad } from 'utils/loadable';

export const CartPage = lazyLoad(
  () => import('./index'),
  module => module.Cart,
);
