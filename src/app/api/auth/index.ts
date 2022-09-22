import { Identity } from 'app/components/Auth/AuthContext';
import axiosClient from '../axiosClient';
import { AuthResponse } from './models';

export const auth = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const url = 'auth/login';
    const response = await axiosClient.post(url, { email, password });
    return response.data;
  },
  signUp: async (email: string, name: string, password: string, confirmPassword: string): Promise<AuthResponse> => {
    const url = 'auth/signup';
    const response = await axiosClient.post(url, { email, name, password, confirmPassword });
    return response.data;
  },
  getIdentity: async (): Promise<Identity | null> => {
    const url = 'me/info';
    const response = await axiosClient.get(url);
    return response.data.data.data;
  },
  changePassword: async (currentPassword: string, password: string, confirmPassword: string): Promise<AuthResponse> => {
    const url = 'me/changePassword';
    const response = await axiosClient.post(url, { currentPassword, password, confirmPassword });
    return response.data;
  },
};
