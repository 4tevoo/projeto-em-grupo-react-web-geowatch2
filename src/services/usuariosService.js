import { api } from './api';

export const userService = {
  cadastrar: async (dados) => api.post('/usuarios', dados),
  listarTodos: async () => api.get('/usuarios'),
  atualizarToken: async (id, dados) => api.put(`/usuarios/${id}`, dados),
  deletar: async (id) => api.delete(`usuarios/${id}`)
};