import { lazyLoad } from 'utils/loadable';

export const UsersPage = lazyLoad(
  () => import('./index'),
  module => module.Users,
);
