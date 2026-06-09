import { api } from './api';

export const userService = {
  cadastrar: (dados) => api.post('/usuarios', dados),
  listarTodos: () => api.get('/usuarios'),
  atualizarToken: (id, dados) => api.put(`/usuarios/${id}`, dados),
  deletar: (id) => api.delete(`usuarios/${id}`)
};