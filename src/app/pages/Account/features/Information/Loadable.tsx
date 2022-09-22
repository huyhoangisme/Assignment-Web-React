import { lazyLoad } from 'utils/loadable';

export const InformationPage = lazyLoad(
  () => import('./index'),
  module => module.Information,
);
