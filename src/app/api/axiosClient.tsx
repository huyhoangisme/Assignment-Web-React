// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs

const getToken = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) return null;
  else return token;
};
const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async config => {
  // Handle token here ...
  const token = getToken();
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
axiosClient.interceptors.response.use(
  response => {
    // Handle refresh token
    if (response && response.data) {
      return response;
    }
    return response;
  },
  error => {
    // Handle errors
    throw error;
  },
);
export default axiosClient;
