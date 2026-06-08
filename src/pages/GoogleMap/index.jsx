import { locais } from '../../data/locais'
import { GameHUD } from '../../components/GameHUD/index.jsx';
import { GoogleView } from './style.jsx'
import { useState } from 'react';


export const GoogleMap = () => {

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

    function getScore() {
        const score = Math.floor(5000 * Math.pow(Math.E, (-10*getDistance()/7500)))
        alert(score)
        return score;
    }

    const [randomSeed, setRandomSeed] = useState(getRandomSeed)
    const [location, setLocation] = useState([randomSeed.latitude, randomSeed.longitude]);
    const [position, setPosition] = useState()

    const streetViewURL = `https://www.google.com/maps/embed/v1/streetview?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            &location=${location[0]},${location[1]}`
    console.log(randomSeed)
    

    return (
        <>
            <GoogleView
            loading="lazy"
            src={streetViewURL}>
            </GoogleView>
            <GameHUD position={position} setPosition={setPosition} handleClick={() => getScore()}/>
        </>
    )
}
