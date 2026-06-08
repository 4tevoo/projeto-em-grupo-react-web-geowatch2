import { api } from './api';

export const userService = {
  cadastrar: (dados) => api.post('/usuarios', dados),
  listarTodos: () => api.get('/usuarios'),
  atualizarToken: (id, dados) => api.put(`/usuarios/${id}`, dados),
  buscarPorToken: (token) => api.get(`/usuarios?token=${token}`)
};