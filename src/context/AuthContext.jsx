import { createContext, useState, useContext, useEffect } from 'react';
import { userService } from '../services/usuariosService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const tokenSalvo = localStorage.getItem('userToken');

      if (tokenSalvo) {
        try {
          const { data } = await userService.listarTodos();
          
          const listaUsuarios = Array.isArray(data) ? data : (data.items || []);
          const usuarioLogado = listaUsuarios.find(u => u.token === tokenSalvo);

          if (usuarioLogado) {
            setUsuario(usuarioLogado);
          } else {
            localStorage.removeItem('userToken');
          }
        } catch (error) {
          console.error("Erro ao validar token:", error);
        }
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  const login = (usuarioLogado, token) => {
    setUsuario(usuarioLogado);
    localStorage.setItem('userToken', token);
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);