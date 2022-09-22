import { AuthResponse } from 'app/api/auth/models';
import React, { createContext, useContext, useEffect, useState } from 'react';
export interface Identity {
  id: number;
  name: string;
  role: string;
  email: string;
  phonenumber: string;
  avatar?: string;
}
export interface AuthProvider {
  login: (email: string, password: string) => Promise<AuthResponse>;
  signUp: (email: string, name: string, password: string, confirmPassword: string) => Promise<AuthResponse>;
  logout: () => void;
  getIdentity: () => Promise<Identity | null>;
  getRole: () => Promise<string | undefined>;
  changePassword: (currentPassword: string, password: string, confirmPassword: string) => Promise<void>;
}

interface AuthContextValues {
  authProvider: AuthProvider;
  loading: boolean;
  authenticated: boolean;
  currentUser?: Identity | null;
  role?: string;
  error?: Error;
  setAuthState: (authenticated: boolean, identity?: Identity | null, role?: string) => void;
}
const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);
export const AuthContextProvider: React.FC<{ authProvider: AuthProvider; children: React.ReactNode }> = ({
  authProvider,
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [currentUser, setAuthUser] = useState<Identity | null | undefined>(null);
  const [role, setRole] = useState<string | undefined>('');
  const [error, setError] = useState<Error | undefined>(undefined);

  const setAuthState = (authenticated: boolean, identity?: Identity | null, role?: string) => {
    setAuthenticated(authenticated);
    setAuthUser(identity);
    setRole(role);
  };
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const user = await authProvider.getIdentity();
        const role = await authProvider.getRole();
        setAuthState(Boolean(user), user, role);
      } catch (err: any) {
        setError(err);
        setAuthState(false, null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <AuthContext.Provider value={{ loading, authenticated, currentUser, role, error, authProvider, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext) as unknown as AuthContextValues;
