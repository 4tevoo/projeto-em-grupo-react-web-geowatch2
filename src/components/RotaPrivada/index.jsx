import { Navigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

export const RotaPrivada = ({ children }) => {
  const { usuario, loading } = useAuth();

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return usuario ? children : <Navigate to="/login" />;
};