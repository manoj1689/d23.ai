import axios from 'axios';

// Set up the base URL for the API
const baseURL = 'http://127.0.0.1:8000';

const axiosApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to dynamically set Authorization header
export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosApi.defaults.headers.common['Authorization'];
  }
};

export default axiosApi;
