import { useAuthContext } from '../components/Auth/AuthContext';

export const useAuthProvider = () => {
  const { authProvider } = useAuthContext();
  return authProvider;
};
