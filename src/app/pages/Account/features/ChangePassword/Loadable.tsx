import { lazyLoad } from 'utils/loadable';

export const ChangePasswordPage = lazyLoad(
  () => import('./index'),
  module => module.ChangePassword,
);
