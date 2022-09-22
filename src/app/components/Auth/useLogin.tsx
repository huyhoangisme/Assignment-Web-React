import { useCustomToast } from 'app/hooks/useCustomToast';
import { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

interface LoginPayLoad {
  email: string;
  password: string;
}
const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { setAuthState, authProvider } = useAuthContext();
  const { toastError } = useCustomToast();
  const login = useCallback(
    async (data: LoginPayLoad): Promise<void> => {
      try {
        setLoading(true);
        const { token } = await authProvider.login(data.email, data.password);
        localStorage.setItem('accessToken', token);
        const role = await authProvider.getRole();
        const identity = await authProvider.getIdentity();
        setAuthState(true, identity, role);
      } catch (err) {
        setAuthState(true, undefined);
        const error = err as Error;
        setError(error);
        toastError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [setAuthState, authProvider],
  );

  return { login, loading, error };
};
export default useLogin;
