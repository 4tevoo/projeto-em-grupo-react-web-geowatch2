import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getRanking = () => axios.get(`${API_URL}/pontuacao?limit=50&sortBy=pontos&order=desc`);