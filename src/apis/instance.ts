import axios from 'axios';

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL;

const axiosApi = (url: string) => {
  const instance = axios.create({ baseURL: url });
  instance.defaults.timeout = 3000;

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use(
    (config) => {
      const token = false; // 수정 필요
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    },
  );

  return instance;
};

export const axiosInstance = axiosApi(API_BASE_URL);
