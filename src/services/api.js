import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_MOCKAPI_URL,
});

api.interceptors.request.use((config => {
    return config;
}))

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na API:", error);
    return Promise.reject(error);
  }
);