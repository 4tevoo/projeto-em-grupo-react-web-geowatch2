import { Marker, TileLayer } from 'react-leaflet';
import { StyledMapContainer, MapWrapper } from './style'
import { useState } from 'react'

export const GameMap = () => {

    const [position, setPosition] = useState([-22.41, -42.97])

    return (
    <MapWrapper>
        <StyledMapContainer center={position} zoom={6} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            </Marker>
        </StyledMapContainer>
    </MapWrapper>

    )
}
