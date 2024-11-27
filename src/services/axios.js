import axios from 'axios';
import { useAuthStore } from "@/store/auth/auth.js";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access': 'application/json',
  },
  timeout: 5000,
  // transformRequest: [
  //   (data, headers) => {
  //     const encryptedString = encryptPayload(JSON.stringify(data));

  //     data = {
  //       SecretStuff: encryptedString,
  //     };

  //     return JSON.stringify(data);
  //   },  
  // ],
});

axiosInstance.interceptors.request.use(config => {
  const { access_token } = useAuthStore();
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});

export default axiosInstance;
