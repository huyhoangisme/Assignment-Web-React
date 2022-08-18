import { lazyLoad } from 'utils/loadable';

export const IntroducePage = lazyLoad(
  () => import('./index'),
  module => module.Introduce,
);
