import { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../services/api';
import { userService } from '../services/usuariosService';

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [gameData, setGameData] = useState({
    scores: [],
    round: 0,
    countries: [],
    guessLat: 0,
    guessLng: 0,
    actualLat: 0,
    actualLng: 0,
    distances: []
  })

  return (
    <ResultContext.Provider value={{ gameData, setGameData }}>
      {children}
    </ResultContext.Provider>
  );
}

export const useResult = () => useContext(ResultContext);