import { TileLayer, Marker, Polyline } from 'react-leaflet';
import { StyledMapContainer, StyledContainer, StyledRestCountries, StyledResults, MapWrapper } from './style.jsx';
import { useEffect, useState } from 'react';
import { useResult } from '../../context/ResultContext.jsx';
import axios from 'axios';
import { FinalResult } from '../../components/FinalResult/index.jsx';
import { RoundResult } from '../../components/RoundResult/index.jsx';


export const Results = () => {

    const{gameData} = useResult()
    
    // const[countryData, setCountryData] = useState([])

    // useEffect(() => {

    //     const countriesAPI = async () => {
    //         const response = await axios.get(`https://restcountries.com/v3.1/name/${gameData.country}`)
    //         setCountryData(response)
    //     }
    //     countriesAPI()

    // },[gameData.country])

    return (
        <>
            <StyledContainer>
                <RoundResult score={gameData.score} distance={gameData.distance}>Round Result</RoundResult>
                {gameData.round == 5 && <FinalResult score={gameData.finalScore} >Final Result</FinalResult>}
                    <MapWrapper>
                        <StyledMapContainer center={[gameData.actualLat, gameData.actualLng]} zoom={5}>
                                    <TileLayer
                                        url={`https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_MAPTILER_KEY}`}
                                        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                                        tileSize={512}
                                        zoomOffset={-1}
                                    />
                                    <Marker position={[gameData.guessLat, gameData.guessLng]}></Marker>
                                    <Marker position={[gameData.actualLat, gameData.actualLng]}></Marker>
                                    <Polyline
                                        positions={[
                                            [gameData.guessLat, gameData.guessLng],
                                            [gameData.actualLat, gameData.actualLng]
                                        ]}
                                        pathOptions={{
                                            color: '#444',
                                            weight: 3,
                                            dashArray: '10, 20',
                                            dashOffset: '0'
                                        }}
                                    />
                        </StyledMapContainer>
                    </MapWrapper>
                <StyledRestCountries>Rest countries</StyledRestCountries>
            </StyledContainer>
        </>

    )
}
