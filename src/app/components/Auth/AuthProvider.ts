import { useAuthContext } from './AuthContext';

export const AuthProvider = () => {
  const { authProvider } = useAuthContext();
  return authProvider;
};
