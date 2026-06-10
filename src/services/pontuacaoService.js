import { api } from './api';

export const pontuacaoService = {
  salvarPontuacao: (dados) => api.post('/partidas', dados),
  listarRanking: () => api.get('/partidas'),
  listarPorUsuario: (idUsuario) => api.get(`/partidas?idUsuario=${idUsuario}`),
  getRanking: () => api.get('/partidas?limit=50&sortBy=pontos&order=desc'),
  getUsuarios: () => api.get('/usuarios')
};