import { lazyLoad } from 'utils/loadable';

export const DetailProductPage = lazyLoad(
  () => import('./index'),
  module => module.DetailProduct,
);
