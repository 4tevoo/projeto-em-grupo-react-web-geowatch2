import { locais } from '../data/locais';
import { createContext, useState, useContext, useEffect } from 'react';

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [gameData, setGameData] = useState({
    scores: [],
    round: 0,
    countries: [],
    guessLats: [],
    guessLngs: [],
    actualLats: [],
    actualLngs: [],
    distances: []
  })

  const [countryCode, setCountryCode] = useState("JP")

  const [posicoesValidas, setPosicoesValidas] = useState(locais.filter((local) => 
    countryCode === "" || local.country === countryCode
  ))
  
  return (
    <ResultContext.Provider value={{ gameData, setGameData, posicoesValidas, setCountryCode }}>
      {children}
    </ResultContext.Provider>
  );
}

export const useResult = () => useContext(ResultContext);