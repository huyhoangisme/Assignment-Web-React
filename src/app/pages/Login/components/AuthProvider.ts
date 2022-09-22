import { auth } from 'app/api/auth';
import { AuthResponse } from 'app/api/auth/models';
import { AuthProvider, Identity } from 'app/components/Auth/AuthContext';

export const authProvider: AuthProvider = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    return await auth.login(email, password);
  },
  signUp: async (email: string, name: string, password: string, confirmPassword: string): Promise<AuthResponse> => {
    return await auth.signUp(email, name, password, confirmPassword);
  },
  logout: async (): Promise<void> => {},
  getIdentity: async (): Promise<Identity | null> => {
    return await auth.getIdentity();
  },
  getRole: async (): Promise<string | undefined> => {
    return undefined;
  },
  changePassword: async (currentPassword: string, password: string, confirmPassword: string): Promise<void> => {
    await auth.changePassword(currentPassword, password, confirmPassword);
  },
};
