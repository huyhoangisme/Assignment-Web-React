import { useCustomToast } from 'app/hooks/useCustomToast';
import { useCallback, useState } from 'react';
import { useAuthContext } from './AuthContext';

const useChangePassword = () => {
  const { authProvider } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { toastError } = useCustomToast({ position: 'top-right' });
  const changePassword = useCallback(
    async (currentPassword: string, password: string, confirmPassword: string): Promise<void> => {
      try {
        setLoading(true);
        await authProvider.changePassword(currentPassword, password, confirmPassword);
      } catch (err) {
        const error = err as Error;
        setError(error);
        toastError(error.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { loading, error, changePassword };
};
export default useChangePassword;
