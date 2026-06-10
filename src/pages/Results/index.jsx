import { TileLayer, Marker, Polyline } from 'react-leaflet';
import { StyledMapContainer, StyledContainer, StyledRestCountries, StyledResults, MapWrapper, StyledFlag, redMarker, StyledData, StyledCard, estilosCores } from './style.jsx';
import { useEffect, useState } from 'react';
import { useResult } from '../../context/ResultContext.jsx';
import axios from 'axios';
import { FinalResult } from '../../components/FinalResult/index.jsx';
import { RoundResult } from '../../components/RoundResult/index.jsx';
import { Link } from 'react-router';


export const Results = () => {

    const { gameData, setGameData } = useResult()

    const [countryData, setCountryData] = useState(null)

    useEffect(() => {

        const countriesAPI = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/alpha/${gameData.countries[gameData.round - 1]}`)
                setCountryData(response.data[0])
            } catch (error) {
                console.log(error.message)
            }
        }
        countriesAPI()

    }, [gameData.countries, gameData.round])

    function wipeMatch() {
        setGameData({
            scores: [],
            finalScore: 0,
            round: 0,
            countries: [],
            guessLats: [],
            guessLngs: [],
            actualLats: [],
            actualLngs: [],
            distances: []
        })
    }

    function scoreColor(score) {
        if (score >= 4000) return '#22d57f'
        if (score >= 2000) return '#fff'
        if (score >= 500) return '#e6b43c'
        return '#b71813'
    }

    function finalScoreColor(score) {
        if (score >= 20000) return '#22d57f'
        if (score >= 10000) return estilosCores['--data-color'] 
        if (score >= 2500) return '#e6b43c'
        return '#b71813'
    }

    return (

        <StyledContainer>
            <StyledCard>
                <StyledResults>
                    {gameData.round == 5 && <FinalResult color={finalScoreColor(gameData.finalScore)} finalScore={gameData.finalScore} ></FinalResult>}
                    <RoundResult color={scoreColor(gameData.scores[gameData.round - 1])} score={gameData.scores[gameData.round - 1]} distance={gameData.distances[gameData.round - 1]}></RoundResult>
                </StyledResults>
            </StyledCard>
            <MapWrapper>
                <StyledMapContainer center={[gameData.actualLats[gameData.round -1 ], gameData.actualLngs[gameData.round -1 ]]} zoom={5}>
                    <TileLayer
                        url={`https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_MAPTILER_KEY}`}
                        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                        tileSize={512}
                        zoomOffset={-1}
                    />
                    {gameData.round == 5 ? (
                        gameData.guessLats.map((_, index) => (
                            <>
                                <Marker position={[gameData.guessLats[index], gameData.guessLngs[index]]}></Marker>
                                <Marker position={[gameData.actualLats[index], gameData.actualLngs[index]]} icon={redMarker}></Marker>
                                <Polyline
                                    positions={[
                                        [gameData.guessLats[index], gameData.guessLngs[index]],
                                        [gameData.actualLats[index], gameData.actualLngs[index]]
                                    ]}
                                    pathOptions={{
                                        color: '#444',
                                        weight: 3,
                                        dashArray: '10, 20',
                                        dashOffset: '0'
                                    }}
                                />
                            </>
                        ))
                    ) : (
                        <>
                            <Marker position={[gameData.guessLats[gameData.round - 1], gameData.guessLngs[gameData.round - 1]]}></Marker>
                            <Marker position={[gameData.actualLats[gameData.round - 1], gameData.actualLngs[gameData.round - 1]]} icon={redMarker}></Marker>
                            <Polyline
                                positions={[
                                    [gameData.guessLats[gameData.round - 1], gameData.guessLngs[gameData.round - 1]],
                                    [gameData.actualLats[gameData.round - 1], gameData.actualLngs[gameData.round - 1]]
                                ]}
                                pathOptions={{
                                    color: '#444',
                                    weight: 3,
                                    dashArray: '10, 20',
                                    dashOffset: '0'
                                }}
                            />
                        </>
                    )}
                </StyledMapContainer>
            </MapWrapper>

            {gameData.round <= 4 && <Link id='nextRound' to={'/geowatch2'}>Próxima rodada</Link>}
            {gameData.round == 5 && <Link id='finalRound' to={'/ranking'} onClick={() => wipeMatch()}>Finalizar Partida</Link>}

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
