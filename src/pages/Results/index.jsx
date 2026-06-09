import { TileLayer, Marker, Polyline } from 'react-leaflet';
import { StyledMapContainer, StyledContainer, StyledRestCountries, StyledResults, MapWrapper, StyledFlag, redMarker, StyledData, StyledCard } from './style.jsx';
import { useEffect, useState } from 'react';
import { useResult } from '../../context/ResultContext.jsx';
import axios from 'axios';
import { FinalResult } from '../../components/FinalResult/index.jsx';
import { RoundResult } from '../../components/RoundResult/index.jsx';
import { Link } from 'react-router';


export const Results = () => {

    const { gameData } = useResult()

    const [countryData, setCountryData] = useState(null)

    useEffect(() => {

        const countriesAPI = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/alpha/${gameData.country}`)
                setCountryData(response.data[0])
            } catch (error) {
                console.log(error.message)
            }


        }
        countriesAPI()

    }, [gameData.country])

    return (

        <StyledContainer>
            <StyledCard>
                <StyledResults>
                    <RoundResult score={gameData.score} distance={gameData.distance}>Round Result</RoundResult>
                    {gameData.round == 5 && <FinalResult score={gameData.finalScore} >Final Result</FinalResult>}
                </StyledResults>
            </StyledCard>
            <MapWrapper>
                <StyledMapContainer center={[gameData.actualLat, gameData.actualLng]} zoom={5}>
                    <TileLayer
                        url={`https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_MAPTILER_KEY}`}
                        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                        tileSize={512}
                        zoomOffset={-1}
                    />
                    <Marker position={[gameData.guessLat, gameData.guessLng]}></Marker>
                    <Marker position={[gameData.actualLat, gameData.actualLng]} icon={redMarker}></Marker>
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
            <Link id='nextRound' to={'/geowatch2'}>Próxima rodada</Link>
            {countryData && (
                <StyledCard>
                    <StyledRestCountries>
                        <StyledFlag area={"flag"} src={countryData.flags.svg} />
                        <StyledFlag area={'coat'} src={countryData.coatOfArms.svg} />
                        <StyledData area={'name'}><span>Nome: </span>{countryData.translations.por.common}</StyledData>
                        <StyledData area={'capital'}><span>Capital: </span>{countryData.capital[0]}</StyledData>
                        <StyledData area={'language'}><span>Língua: </span>{Object.values(countryData.languages).join(', ')}</StyledData>
                        <StyledData area={'population'}><span>População: </span>{countryData.population.toLocaleString('pt-BR')}</StyledData>
                        <StyledData area={'region'}><span>Região: </span>{countryData.region}</StyledData>
                        <StyledData area={'subregion'}><span>Sub região: </span>{countryData.subregion}</StyledData>
                    </StyledRestCountries>
                </StyledCard>
            )}
        </StyledContainer>
    )
}
