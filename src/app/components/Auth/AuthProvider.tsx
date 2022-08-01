export interface User {
  username: string;
  name: string;
  email: string;
  password: string;
}
export interface AuthProvider {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<boolean>;
  currentUser?: User;
}

export const defaultProvider: AuthProvider = {
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkAuth: () => Promise.resolve(false),
};
