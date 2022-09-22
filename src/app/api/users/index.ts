import { User } from '../auth/models';
import axiosClient from '../axiosClient';

export interface DataUser<T> {
  data: T[];
}
interface UserResponse {
  status: string;
  total?: number;
  results?: number;
  data: DataUser<User>;
}
export interface Params {
  limit: number;
  page: number;
}
export const users = {
  getAllUsers: async (params: Params): Promise<UserResponse> => {
    const url = 'users';
    const response = await axiosClient.get(url, { params });
    return response.data;
  },
  getUser: async (id: string): Promise<UserResponse> => {
    const url = `users/${id}`;
    const response = await axiosClient.get(url);
    return response.data;
  },
  deleteUser: async (id: string): Promise<void> => {
    const url = `users/${id}`;
    await axiosClient.delete(url);
  },
  updateUser: async () => {},
  createNewUser: async () => {},
};
