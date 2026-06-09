import { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../services/api';
import { userService } from '../services/usuariosService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dentro do seu AuthContext.jsx, substitua o useEffect por este:

  useEffect(() => {
    const checkToken = async () => {
      const tokenSalvo = localStorage.getItem('userToken');

      if (tokenSalvo) {
        try {
          const { data } = await userService.listarTodos();
          const usuarioLogado = data.find(u => u.token === tokenSalvo);

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