import { lazyLoad } from 'utils/loadable';

export const CheckoutPage = lazyLoad(
  () => import('./index'),
  module => module.Checkout,
);
