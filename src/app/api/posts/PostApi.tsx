import axiosClient from '../axiosClient';

export const PostApi = {
  getAllPosts: () => {
    const url = '/posts';
    return axiosClient.get(url);
  },
};
