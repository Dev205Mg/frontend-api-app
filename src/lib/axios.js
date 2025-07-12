import router from '@/router';
import { useAuthStore } from '@/stores/auth';
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
  async (error) => {
    // Handle errors globally
    const auth = useAuthStore();
    switch(error.response.status) {
      case 401:
        auth.cleanState();
        router.push({name: 'login'});
        break;
      case 404:
        router.push({name: 'NotFound'})
        break;
      case 419:
        auth.cleanState();
        router.push({name: 'login'});
        break;
      case 500:
        router.push({name: 'errorServeur'});
        break;
    }

    return Promise.reject(error);
  }
);

export default axiosClient;