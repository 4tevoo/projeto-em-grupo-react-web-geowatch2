import { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../services/api';
import { userService } from '../services/usuariosService';

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [gameData,setGameData] = useState(null)

  return (
    <ResultContext.Provider value={{ gameData, setGameData }}>
      {children}
    </ResultContext.Provider>
  );
}

export const useResult = () => useContext(ResultContext);