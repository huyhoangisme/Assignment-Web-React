import { AuthProvider, Identity } from 'app/components/Auth/AuthContext';

export const authProvider: AuthProvider = {
  login: async (email: string, password: string): Promise<void> => {},
  logout: async (): Promise<void> => {},
  getIdentity: async (): Promise<Identity | null> => {
    return null;
  },
  getRole: async (): Promise<string | undefined> => {
    return undefined;
  },
};
