import React, { createContext, useContext, useState } from 'react';
import { AuthProvider, defaultProvider, User } from './AuthProvider';
interface Error {
  typeError: string;
  message: string;
}
interface AuthContextValues {
  loading: boolean;
  authenticated: boolean;
  error?: Error;
  authProvider: AuthProvider;
}
const AuthContext = createContext<AuthContextValues>({
  loading: false,
  authenticated: false,
  authProvider: defaultProvider,
});

const useAuthContextProvider = (authProvider: AuthProvider): AuthContextValues => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>({ typeError: '', message: '' });
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>({
    username: 'Huy Hoang',
    name: 'Tran Huy Hoang',
    email: 'hoang@gmail.com',
    password: '',
  });
  return {
    loading,
    error,
    authenticated,
    authProvider: { ...authProvider, currentUser },
  };
};
export const AuthContextProvider = ({ authProvider, children }) => {
  return <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>;
};
export const useAuthContext = () => useContext(AuthContext) as unknown as AuthContextValues;
