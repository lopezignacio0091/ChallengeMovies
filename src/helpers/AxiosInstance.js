import axios from 'axios';
import { devUrl } from '../constants/types';

const axiosInstance = axios.create({
  baseURL: `${devUrl}`,
});

axiosInstance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInstance;