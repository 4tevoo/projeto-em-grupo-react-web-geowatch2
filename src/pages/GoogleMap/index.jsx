import { locais } from '../../data/locais'
import { GoogleView } from './style.jsx'
import { useState } from 'react';

export const GoogleMap = () => {

    function getRandomSeed() {
        let random = locais[Math.floor(Math.random() * (locais.length - 1))]
        return random
    }

    const [randomSeed, setRandomSeed] = useState(getRandomSeed)
    const [location, setLocation] = useState([randomSeed.latitude, randomSeed.longitude]);

    let streetViewURL = `https://www.google.com/maps/embed/v1/streetview?key=ADICIONAR_CHAVE_AQUI
            &location=${location[0]},${location[1]}`
    console.log(randomSeed)

    return (
        <GoogleView
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src={streetViewURL}>
        </GoogleView>
    )
}
