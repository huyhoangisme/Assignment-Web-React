import { useAuthContext } from 'app/components/Auth/AuthContext';
import { useState } from 'react';

interface dataLogin {
  email: string;
  password: string;
}
interface LoginHook {
  loading: boolean;
  error?: Error;
  login: ({ email, password }) => void;
}
export const useLogin = (): LoginHook => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const { authProvider } = useAuthContext();
  const login = async (data: dataLogin) => {
    try {
      setLoading(true);
      await authProvider.login(data.email, data.password);
    } catch (error) {
      throw error;
    }
  };
  return {
    login,
    loading,
    error,
  };
};
