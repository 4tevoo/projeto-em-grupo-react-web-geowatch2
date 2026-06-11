import { TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import { StyledMapContainer, StyledContainer, StyledRestCountries, StyledResults, MapWrapper, StyledFlag, redMarker, StyledData, StyledCard, estilosCores, StyledCongrats, blueMarker } from './style.jsx';
import { useEffect, useState } from 'react';
import { useResult } from '../../context/ResultContext.jsx';
import axios from 'axios';
import { FinalResult } from '../../components/FinalResult/index.jsx';
import { RoundResult } from '../../components/RoundResult/index.jsx';
import { Link } from 'react-router';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export const Results = () => {

    const { gameData, setGameData } = useResult()

    const [countryData, setCountryData] = useState(null)
    const [congrats, setCongrats] = useState(false)

    useEffect(() => {

        const countriesAPI = async () => {
            try {
                const countryCode = gameData.countries[gameData.round - 1];
                const targetUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;
                const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

                const response = await axios.get(proxyUrl);

                setCountryData(response.data[0]);
                console.log("Deu certo!", response.status);

            } catch (error) {
                console.log(error.message)
                console.log(response.status)
                console.log("Erro na requisição:", error.message);
            }

        }
        countriesAPI()

        if (gameData.scores[gameData.round - 1] === 5000) {
            setCongrats(true);
            setTimeout(() => {
                setCongrats(false)
            }, 3500)
        }

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

            {congrats && <StyledCongrats backgroundColor='tranparent' src="/Congrats.json" autoplay loop />}
            <StyledCard>
                <StyledResults>
                    {gameData.round == 5 && <FinalResult color={finalScoreColor(gameData.finalScore)} finalScore={gameData.finalScore} ></FinalResult>}
                    <RoundResult color={scoreColor(gameData.scores[gameData.round - 1])} score={gameData.scores[gameData.round - 1]} distance={gameData.distances[gameData.round - 1]}></RoundResult>
                </StyledResults>
            </StyledCard>
            <MapWrapper>
                <StyledMapContainer center={[gameData.actualLats[gameData.round - 1], gameData.actualLngs[gameData.round - 1]]} zoom={5}>
                    <TileLayer

                        url={`https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_MAPTILER_KEY}`}
                        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                        tileSize={512}
                        zoomOffset={-1}
                    />
                    {gameData.round == 5 ? (
                        gameData.guessLats.map((_, index) => (
                            <>
                                <Marker position={[gameData.guessLats[index], gameData.guessLngs[index]]} icon={blueMarker}>
                                    <Popup>Rodada: {index + 1}</Popup>
                                </Marker>
                                <Marker position={[gameData.actualLats[index], gameData.actualLngs[index]]} icon={redMarker}>
                                    <Popup>Rodada: {index + 1}</Popup>
                                </Marker>
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
                            <Marker position={[gameData.guessLats[gameData.round - 1], gameData.guessLngs[gameData.round - 1]]} icon={blueMarker}></Marker>
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
            {gameData.round == 5 && <Link id='finalRound' to={'/'} onClick={() => wipeMatch()}>Finalizar Partida</Link>}

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
