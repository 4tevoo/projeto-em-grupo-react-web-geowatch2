import { GameHUD } from '../../components/GameHUD/index.jsx';
import { useNavigate } from 'react-router';
import { GoogleView } from './style.jsx';
import { pontuacaoService } from '../../services/pontuacaoService.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useResult } from '../../context/ResultContext.jsx';


export const GoogleMap = () => {
    
    const { setGameData, gameData, posicoesValidas, countryCode, usados, setUsados } = useResult()
    const [randomSeed, setRandomSeed] = useState(getRandomSeed)
    const [location, setLocation] = useState([randomSeed.latitude, randomSeed.longitude]);
    const [position, setPosition] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { usuario } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(gameData.round === 5) {
            wipeMatch()
        }
    }, [])

    function getRandomSeed() {
    const disponiveis = posicoesValidas.filter(local => !usados.includes(local.id))
    
    const pool = disponiveis.length > 0 ? disponiveis : posicoesValidas
    
    const random = pool[Math.floor(Math.random() * pool.length)]

    setUsados(prev => [...prev, random.id])
    return random
    }

    function getScale() {
        let maiorCoord = [0, 0]
        let menorCoord = [0, 0]
        for(let i = 0; i < posicoesValidas.length; i++) {
            if(posicoesValidas[i].latitude > maiorCoord[0]) {
                maiorCoord[0] = posicoesValidas[i].latitude
            }
            if(posicoesValidas[i].longitude > maiorCoord[1]) {
                maiorCoord[1] = posicoesValidas[i].longitude
            }
            if(posicoesValidas[i].latitude < menorCoord[0]) {
                menorCoord[0] = posicoesValidas[i].latitude
            }
            if(posicoesValidas[i].longitude < menorCoord[1]) {
                menorCoord[1] = posicoesValidas[i].longitude
            }
        }

        return getDistance(maiorCoord, menorCoord)
    }

    function getDistance(location1, location2) {
        const locationLatitudeRadians = location1[0] * Math.PI / 180
        const locationLongitudeRadians = location1[1] * Math.PI / 180
        const positionLatitudeRadians = location2[0] * Math.PI / 180
        const positionLongitudeRadians = location2[1] * Math.PI / 180

        const deltaLatitude = Math.abs(locationLatitudeRadians - positionLatitudeRadians)
        const deltaLongitude = Math.abs(locationLongitudeRadians - positionLongitudeRadians)

        const distancia = 6371 * 2 * Math.asin(Math.sqrt(Math.sin(deltaLatitude/2)**2 + Math.cos(locationLatitudeRadians) * Math.cos(positionLatitudeRadians) * Math.sin(deltaLongitude/2)**2))
        return distancia
    }

    function truncateToDecimals(number, digits) {
    const multiplier = Math.pow(10, digits);
    return Math.trunc(number * multiplier) / multiplier;
    }

    function wipeMatch() {
        setUsados([])
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

    function getScore() {
        const score = Math.ceil(5000 * Math.pow(Math.E, (-10*getDistance(location, position)/getScale())))
        let sumScore = score;
        let round = 0;

        if(gameData) {
            round = gameData.round + 1
            gameData.scores.forEach((s) => {
                sumScore += s
            })
        }

        if(round == 5 && usuario != null) {
            console.log(typeof countryCode)
            pontuacaoService.salvarPontuacao({
            idUsuario: usuario.id,
            nomeUsuario: usuario.nome,
            pontos: [...gameData.scores, score],
            paises: [...gameData.countries, randomSeed.country],
            distancias: [...gameData.distances, truncateToDecimals(getDistance(location, position), 2)],
            data: new Date().toISOString(),
            opcao: countryCode
            })
        }

        setGameData({
            scores: [...gameData.scores, score],
            finalScore: sumScore,
            round: round,
            countries: [...gameData.countries, randomSeed.country],
            guessLats: [...gameData.guessLats, position[0]],
            guessLngs: [...gameData.guessLngs, position[1]],
            actualLats: [...gameData.actualLats, location[0]],
            actualLngs: [...gameData.actualLngs, location[1]],
            distances: [...gameData.distances, truncateToDecimals(getDistance(location, position), 2)]
        })


        navigate('/results')
    }

    

    const streetViewURL = `https://www.google.com/maps/embed/v1/streetview?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            &location=${location[0]},${location[1]}`

    return (
        <>
            {isLoading && (
                <div className="App">
                    <DotLottieReact src="/Loading.json" autoplay loop />
                </div>
            )}
            <GoogleView
            loading="eager"
            src={streetViewURL}
            onLoad={() => setIsLoading(false)}
            >
            </GoogleView>
            <GameHUD position={position} setPosition={setPosition} handleClick={() => getScore()} sumScore={gameData.finalScore}/>
        </>
    )
}
