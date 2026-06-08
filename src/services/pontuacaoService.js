import { api } from './api';

export const pontuacaoService = {
  salvarPontuacao: (dados) => api.post('/pontuacao', dados),
  listarRanking: () => api.get('/pontuacao'),
  listarPorUsuario: (idUsuario) => api.get(`/pontuacao?idUsuario=${idUsuario}`)
};