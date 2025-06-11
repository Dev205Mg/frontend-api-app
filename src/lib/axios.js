import router from '@/router';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
});

// axiosClient.interceptors.request.use(
//   (config) => {
//     // Add any request interceptors here if needed
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   }
// );

axiosClient.interceptors.response.use( 
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      router.push({name: 'login'});
    }

    throw error; // Re-throw the error to be handled by the calling code
  }
);

export default axiosClient;