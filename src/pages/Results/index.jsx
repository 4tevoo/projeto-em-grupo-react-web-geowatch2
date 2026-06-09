import { TileLayer } from 'react-leaflet';
import { StyledMapContainer, StyledContainer, StyledRestCountries, StyledResults } from './style.jsx';
import { useContext, useEffect, useState } from 'react';
import { ResultContext } from '../../context/ResultContext.jsx';
import axios from 'axios';
import { FinalResult } from '../../components/FinalResult/index.jsx';
import { RoundResult } from '../../components/RoundResult/index.jsx';


export const Results = () => {

    const{gameData} = useContext(ResultContext)
    
    const[countryData, setCountryData] = useState([])

    useEffect(() => {

        const countriesAPI = async () => {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${gameData.country}`)
            setCountryData(response)
        }
        countriesAPI()

    },[gameData.country])

    return (
        <>
            <StyledContainer>
                {gameData.round <= 4 && <RoundResult score={gameData.score} >Round Result</RoundResult>}
                {gameData.round == 5 && <FinalResult score={gameData.score} >Final Result</FinalResult>}
                    <StyledMapContainer >
                        Era pra ser o mapa
                    </StyledMapContainer>
                <StyledRestCountries>Rest countries</StyledRestCountries>
            </StyledContainer>
        </>

    )
}
