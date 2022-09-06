import { lazyLoad } from 'utils/loadable';

export const ModalCartPage = lazyLoad(
  () => import('./index'),
  module => module.ModalCart,
);
