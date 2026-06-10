import { locais } from '../../data/locais.jsx'
import { GameHUD } from '../../components/GameHUD/index.jsx';
import { useNavigate } from 'react-router';
import { GoogleView } from './style.jsx';
import { pontuacaoService } from '../../services/pontuacaoService.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useResult } from '../../context/ResultContext.jsx';


export const GoogleMap = () => {
    
    const [randomSeed, setRandomSeed] = useState(getRandomSeed)
    const [location, setLocation] = useState([randomSeed.latitude, randomSeed.longitude]);
    const [position, setPosition] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { setGameData, gameData } = useResult()
    const { usuario } = useAuth();
    const navigate = useNavigate();

    function getRandomSeed() {
        const random = locais[Math.floor(Math.random() * (locais.length - 1))]
        return random
    }

    function getDistance() {
        const locationLatitudeRadians = location[0] * Math.PI / 180
        const locationLongitudeRadians = location[1] * Math.PI / 180
        const positionLatitudeRadians = position[0] * Math.PI / 180
        const positionLongitudeRadians = position[1] * Math.PI / 180

        const deltaLatitude = Math.abs(locationLatitudeRadians - positionLatitudeRadians)
        const deltaLongitude = Math.abs(locationLongitudeRadians - positionLongitudeRadians)

        const distancia = 6371 * 2 * Math.asin(Math.sqrt(Math.sin(deltaLatitude/2)**2 + Math.cos(locationLatitudeRadians) * Math.cos(positionLatitudeRadians) * Math.sin(deltaLongitude/2)**2))
        return distancia
    }

    function truncateToDecimals(number, digits) {
    const multiplier = Math.pow(10, digits);
    return Math.trunc(number * multiplier) / multiplier;
    }

    function getScore() {
        const score = Math.floor(5000 * Math.pow(Math.E, (-10*getDistance()/7500)))
        let sumScore = score;
        let round = 0;

        if(gameData) {
            round = gameData.round + 1
            gameData.scores.forEach((s) => {
                sumScore += s
            })
        }

        if(round == 5 && usuario != null) {
            pontuacaoService.salvarPontuacao({
            idUsuario: usuario.id,
            nomeUsuario: usuario.nome,
            pontos: [...gameData.scores, score],
            paises: [...gameData.countries, randomSeed.country],
            distancias: [...gameData.distances, truncateToDecimals(getDistance(), 2)]
            })
        }

        setGameData({
            scores: [...gameData.scores, score],
            finalScore: sumScore,
            round: round,
            countries: [...gameData.countries, randomSeed.country],
            guessLat: position[0],
            guessLng: position[1],
            actualLat: location[0],
            actualLng: location[1],
            distances: [...gameData.distances, truncateToDecimals(getDistance(), 2)]
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
            loading="lazy"
            src={streetViewURL}
            onLoad={() => setIsLoading(false)}
            >
            </GoogleView>
            <GameHUD position={position} setPosition={setPosition} handleClick={() => getScore()} score={gameData.round}/>
        </>
    )
}
