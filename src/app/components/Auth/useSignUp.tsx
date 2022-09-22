import { useCallback, useState } from 'react';
import { useAuthContext } from './AuthContext';
interface SignUpPayLoad {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}
const useSignUp = () => {
  const { authProvider } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const signUp = useCallback(
    async (data: SignUpPayLoad) => {
      try {
        setLoading(true);
        const res = await authProvider.signUp(data.email, data.name, data.password, data.confirmPassword);
        res.status === 'success' ? setSignUpSuccess(true) : setSignUpSuccess(false);
      } catch (e) {
        const error = e as Error;
        setError(error);
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [authProvider],
  );
  return { loading, signUpSuccess, error, signUp };
};
export default useSignUp;
