import axios from 'axios';
import { store } from '../store/store'; // adjust the path to your store

const baseURL = 'http://127.0.0.1:8000';

const axiosApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Automatically add token from Redux store to every request
axiosApi.interceptors.request.use(
  (config) => {
    const token = store.getState().firebaseAuth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosApi;
