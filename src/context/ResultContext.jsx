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

  const[usados, setUsados] = useState([])

  const [countryCode, setCountryCode] = useState("")

  const [posicoesValidas, setPosicoesValidas] = useState(locais)


  useEffect(() => {
    setUsados([])
    if (countryCode === "") {
      setPosicoesValidas(locais);
    } else {
      const filtrados = locais.filter((local) => local.country === countryCode);
      setPosicoesValidas(filtrados);
    }
  }, [countryCode]); 
  
  return (
    <ResultContext.Provider value={{ gameData, setGameData, posicoesValidas, setCountryCode, usados, setUsados }}>
      {children}
    </ResultContext.Provider>
  );
}

export const useResult = () => useContext(ResultContext);