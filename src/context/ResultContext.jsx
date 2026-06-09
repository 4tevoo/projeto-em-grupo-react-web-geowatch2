import { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../services/api';
import { userService } from '../services/usuariosService';

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [gameData, setGameData] = useState({
    score: 0,
    finalScore: 0,
    round: 0,
    country: "Brasil",
    guessLat: 0,
    guessLng: 0,
    actualLat: 0,
    actualLng: 0,
    distance: 0
  })

  return (
    <ResultContext.Provider value={{ gameData, setGameData }}>
      {children}
    </ResultContext.Provider>
  );
}

export const useResult = () => useContext(ResultContext);