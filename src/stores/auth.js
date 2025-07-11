import axiosClient from "@/lib/axios";
import router from "@/router";
import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isLoggedIn = ref(false);
  
  const register = async (credentials, errors) => {
    await axiosClient.get("/sanctum/csrf-cookie");
    try {
      const response = await axiosClient.post("/api/register", credentials);
      await getUser();
      router.push({name: 'dashboard'})
    } catch (e) {
      if(e instanceof AxiosError && e.response.status === 422) {
        errors.name = e.response.data.errors.name
        errors.email = e.response.data.errors.email
        errors.password = e.response.data.errors.password
      }
    }
  };

  const login = async (credentials, errors) => {
    await axiosClient.get('/sanctum/csrf-cookie');
    errors.email = []
    errors.password = []
    try {
      await axiosClient.post('/api/login', credentials);
      await getUser();
      router.push({name: 'dashboard'})
    } catch (e) {
      if(e instanceof AxiosError && e.response.status === 422) {
        errors.email = e.response.data.errors.email
        errors.password = e.response.data.errors.password
      }
    }
  }

  const getUser = async () => {
    try {
      const response = await axiosClient.get('/api/user');
      user.value = response.data
      isLoggedIn.value = true;
    } catch (error) {
      console.error('Failed to get user:', error);
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post('/api/logout');
      user.value = null;
      isLoggedIn.value = false;
      router.push({ name: 'login' });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  return {
    user,
    isLoggedIn,
    register,
    login,
    getUser,
    logout
  };
})