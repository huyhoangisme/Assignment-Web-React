import axiosClient from '../axiosClient';
import { AuthResponse, User } from './models';

export const auth = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const url = 'auth/login';
    const response = await axiosClient.post(url, { email, password });
    return response.data;
  },
  signUp: async (user: User): Promise<AuthResponse> => {
    const url = 'auth/signup';
    const response = await axiosClient.post(url, user);
    return response.data();
  },
};
